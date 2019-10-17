"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _require = require("./constants.evaluate"),
    CSS_DISPLAY_TAGS = _require.CSS_DISPLAY_TAGS,
    CSS_DISPLAY_DEFAULT = _require.CSS_DISPLAY_DEFAULT,
    CSS_WHITE_SPACE_TAGS = _require.CSS_WHITE_SPACE_TAGS,
    CSS_WHITE_SPACE_DEFAULT = _require.CSS_WHITE_SPACE_DEFAULT;

var htmlTagNames = require("html-tag-names");

var htmlElementAttributes = require("html-element-attributes");

var HTML_TAGS = arrayToMap(htmlTagNames);
var HTML_ELEMENT_ATTRIBUTES = mapObject(htmlElementAttributes, arrayToMap);

function arrayToMap(array) {
  var map = Object.create(null);
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var value = _step.value;
      map[value] = true;
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        //throw _iteratorError;
      }
    }
  }

  return map;
}

function mapObject(object, fn) {
  var newObject = Object.create(null);

  for (var _i = 0, _Object$keys = Object.keys(object); _i < _Object$keys.length; _i++) {
    var key = _Object$keys[_i];
    newObject[key] = fn(object[key], key);
  }

  return newObject;
}

function shouldPreserveContent(node, options) {
  if (node.type === "element" && node.fullName === "template" && node.attrMap.lang && node.attrMap.lang !== "html") {
    return true;
  } // unterminated node in ie conditional comment
  // e.g. <!--[if lt IE 9]><html><![endif]-->


  if (node.type === "ieConditionalComment" && node.lastChild && !node.lastChild.isSelfClosing && !node.lastChild.endSourceSpan) {
    return true;
  } // incomplete html in ie conditional comment
  // e.g. <!--[if lt IE 9]></div><![endif]-->


  if (node.type === "ieConditionalComment" && !node.complete) {
    return true;
  } // top-level elements (excluding <template>, <style> and <script>) in Vue SFC are considered custom block
  // custom blocks can be written in other languages so we should preserve them to not break the code


  if (options.parser === "vue" && node.type === "element" && node.parent.type === "root" && ["template", "style", "script", // vue parser can be used for vue dom template as well, so we should still format top-level <html>
  "html"].indexOf(node.fullName) === -1) {
    return true;
  } // TODO: handle non-text children in <pre>


  if (isPreLikeNode(node) && node.children.some(function (child) {
    return child.type !== "text" && child.type !== "interpolation";
  })) {
    return true;
  }

  return false;
}

function hasPrettierIgnore(node) {
  if (node.type === "attribute" || isTextLikeNode(node)) {
    return false;
  }

  if (!node.parent) {
    return false;
  }

  if (typeof node.index !== "number" || node.index === 0) {
    return false;
  }

  var prevNode = node.parent.children[node.index - 1];
  return isPrettierIgnore(prevNode);
}

function isPrettierIgnore(node) {
  return node.type === "comment" && node.value.trim() === "prettier-ignore";
}

function getPrettierIgnoreAttributeCommentData(value) {
  var match = value.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);

  if (!match) {
    return false;
  }

  if (!match[1]) {
    return true;
  }

  return match[1].split(/\s+/);
}
/** there's no opening/closing tag or it's considered not breakable */


function isTextLikeNode(node) {
  return node.type === "text" || node.type === "comment";
}

function isScriptLikeTag(node) {
  return node.type === "element" && (node.fullName === "script" || node.fullName === "style" || node.fullName === "svg:style");
}

function isFrontMatterNode(node) {
  return node.type === "yaml" || node.type === "toml";
}

function canHaveInterpolation(node) {
  return node.children && !isScriptLikeTag(node);
}

function isWhitespaceSensitiveNode(node) {
  return isScriptLikeTag(node) || node.type === "interpolation" || isIndentationSensitiveNode(node);
}

function isIndentationSensitiveNode(node) {
  return getNodeCssStyleWhiteSpace(node).startsWith("pre");
}

function isLeadingSpaceSensitiveNode(node) {
  var isLeadingSpaceSensitive = _isLeadingSpaceSensitiveNode();

  if (isLeadingSpaceSensitive && !node.prev && node.parent && node.parent.tagDefinition && node.parent.tagDefinition.ignoreFirstLf) {
    return node.type === "interpolation";
  }

  return isLeadingSpaceSensitive;

  function _isLeadingSpaceSensitiveNode() {
    if (isFrontMatterNode(node)) {
      return false;
    }

    if ((node.type === "text" || node.type === "interpolation") && node.prev && (node.prev.type === "text" || node.prev.type === "interpolation")) {
      return true;
    }

    if (!node.parent || node.parent.cssDisplay === "none") {
      return false;
    }

    if (isPreLikeNode(node.parent)) {
      return true;
    }

    if (!node.prev && (node.parent.type === "root" || isScriptLikeTag(node.parent) || !isFirstChildLeadingSpaceSensitiveCssDisplay(node.parent.cssDisplay))) {
      return false;
    }

    if (node.prev && !isNextLeadingSpaceSensitiveCssDisplay(node.prev.cssDisplay)) {
      return false;
    }

    return true;
  }
}

function isTrailingSpaceSensitiveNode(node) {
  if (isFrontMatterNode(node)) {
    return false;
  }

  if ((node.type === "text" || node.type === "interpolation") && node.next && (node.next.type === "text" || node.next.type === "interpolation")) {
    return true;
  }

  if (!node.parent || node.parent.cssDisplay === "none") {
    return false;
  }

  if (isPreLikeNode(node.parent)) {
    return true;
  }

  if (!node.next && (node.parent.type === "root" || isScriptLikeTag(node.parent) || !isLastChildTrailingSpaceSensitiveCssDisplay(node.parent.cssDisplay))) {
    return false;
  }

  if (node.next && !isPrevTrailingSpaceSensitiveCssDisplay(node.next.cssDisplay)) {
    return false;
  }

  return true;
}

function isDanglingSpaceSensitiveNode(node) {
  return isDanglingSpaceSensitiveCssDisplay(node.cssDisplay) && !isScriptLikeTag(node);
}

function forceNextEmptyLine(node) {
  return isFrontMatterNode(node) || node.next && node.sourceSpan.end.line + 1 < node.next.sourceSpan.start.line;
}
/** firstChild leadingSpaces and lastChild trailingSpaces */


function forceBreakContent(node) {
  return forceBreakChildren(node) || node.type === "element" && node.children.length !== 0 && (["body", "script", "style"].indexOf(node.name) !== -1 || node.children.some(function (child) {
    return hasNonTextChild(child);
  })) || node.firstChild && node.firstChild === node.lastChild && hasLeadingLineBreak(node.firstChild) && (!node.lastChild.isTrailingSpaceSensitive || hasTrailingLineBreak(node.lastChild));
}
/** spaces between children */


function forceBreakChildren(node) {
  return node.type === "element" && node.children.length !== 0 && (["html", "head", "ul", "ol", "select"].indexOf(node.name) !== -1 || node.cssDisplay.startsWith("table") && node.cssDisplay !== "table-cell");
}

function preferHardlineAsLeadingSpaces(node) {
  return preferHardlineAsSurroundingSpaces(node) || node.prev && preferHardlineAsTrailingSpaces(node.prev) || hasSurroundingLineBreak(node);
}

function preferHardlineAsTrailingSpaces(node) {
  return preferHardlineAsSurroundingSpaces(node) || node.type === "element" && node.fullName === "br" || hasSurroundingLineBreak(node);
}

function hasSurroundingLineBreak(node) {
  return hasLeadingLineBreak(node) && hasTrailingLineBreak(node);
}

function hasLeadingLineBreak(node) {
  return node.hasLeadingSpaces && (node.prev ? node.prev.sourceSpan.end.line < node.sourceSpan.start.line : node.parent.type === "root" || node.parent.startSourceSpan.end.line < node.sourceSpan.start.line);
}

function hasTrailingLineBreak(node) {
  return node.hasTrailingSpaces && (node.next ? node.next.sourceSpan.start.line > node.sourceSpan.end.line : node.parent.type === "root" || node.parent.endSourceSpan.start.line > node.sourceSpan.end.line);
}

function preferHardlineAsSurroundingSpaces(node) {
  switch (node.type) {
    case "ieConditionalComment":
    case "comment":
    case "directive":
      return true;

    case "element":
      return ["script", "select"].indexOf(node.name) !== -1;
  }

  return false;
}

function getLastDescendant(node) {
  return node.lastChild ? getLastDescendant(node.lastChild) : node;
}

function hasNonTextChild(node) {
  return node.children && node.children.some(function (child) {
    return child.type !== "text";
  });
}

function inferScriptParser(node) {
  if (node.name === "script" && !node.attrMap.src) {
    if (!node.attrMap.lang && !node.attrMap.type || node.attrMap.type === "module" || node.attrMap.type === "text/javascript" || node.attrMap.type === "text/babel" || node.attrMap.type === "application/javascript") {
      return "babel";
    }

    if (node.attrMap.type === "application/x-typescript" || node.attrMap.lang === "ts" || node.attrMap.lang === "tsx") {
      return "typescript";
    }

    if (node.attrMap.type === "text/markdown") {
      return "markdown";
    }

    if (node.attrMap.type.endsWith("json") || node.attrMap.type.endsWith("importmap")) {
      return "json";
    }
  }

  if (node.name === "style") {
    if (!node.attrMap.lang || node.attrMap.lang === "postcss") {
      return "css";
    }

    if (node.attrMap.lang === "scss") {
      return "scss";
    }

    if (node.attrMap.lang === "less") {
      return "less";
    }
  }

  return null;
}

function isBlockLikeCssDisplay(cssDisplay) {
  return cssDisplay === "block" || cssDisplay === "list-item" || cssDisplay.startsWith("table");
}

function isFirstChildLeadingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isLastChildTrailingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isPrevTrailingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay);
}

function isNextLeadingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay);
}

function isDanglingSpaceSensitiveCssDisplay(cssDisplay) {
  return !isBlockLikeCssDisplay(cssDisplay) && cssDisplay !== "inline-block";
}

function isPreLikeNode(node) {
  return getNodeCssStyleWhiteSpace(node).startsWith("pre");
}

function countParents(path) {
  var predicate = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
    return true;
  };
  var counter = 0;

  for (var i = path.stack.length - 1; i >= 0; i--) {
    var value = path.stack[i];

    if (value && _typeof(value) === "object" && !Array.isArray(value) && predicate(value)) {
      counter++;
    }
  }

  return counter;
}

function hasParent(node, fn) {
  var current = node;

  while (current) {
    if (fn(current)) {
      return true;
    }

    current = current.parent;
  }

  return false;
}

function getNodeCssStyleDisplay(node, options) {
  if (node.prev && node.prev.type === "comment") {
    // <!-- display: block -->
    var match = node.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);

    if (match) {
      return match[1];
    }
  }

  var isInSvgForeignObject = false;

  if (node.type === "element" && node.namespace === "svg") {
    if (hasParent(node, function (parent) {
      return parent.fullName === "svg:foreignObject";
    })) {
      isInSvgForeignObject = true;
    } else {
      return node.name === "svg" ? "inline-block" : "block";
    }
  }

  switch (options.htmlWhitespaceSensitivity) {
    case "strict":
      return "inline";

    case "ignore":
      return "block";

    default:
      return node.type === "element" && (!node.namespace || isInSvgForeignObject) && CSS_DISPLAY_TAGS[node.name] || CSS_DISPLAY_DEFAULT;
  }
}

function getNodeCssStyleWhiteSpace(node) {
  return node.type === "element" && !node.namespace && CSS_WHITE_SPACE_TAGS[node.name] || CSS_WHITE_SPACE_DEFAULT;
}

function getMinIndentation(text) {
  var minIndentation = Infinity;
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = text.split("\n")[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var lineText = _step2.value;

      if (lineText.length === 0) {
        continue;
      }

      if (/\S/.test(lineText[0])) {
        return 0;
      }

      var indentation = lineText.match(/^\s*/)[0].length;

      if (lineText.length === indentation) {
        continue;
      }

      if (indentation < minIndentation) {
        minIndentation = indentation;
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return minIndentation === Infinity ? 0 : minIndentation;
}

function dedentString(text) {
  var minIndent = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getMinIndentation(text);
  return minIndent === 0 ? text : text.split("\n").map(function (lineText) {
    return lineText.slice(minIndent);
  }).join("\n");
}

function normalizeParts(parts) {
  var newParts = [];
  var restParts = parts.slice();

  while (restParts.length !== 0) {
    var part = restParts.shift();

    if (!part) {
      continue;
    }

    if (part.type === "concat") {
      Array.prototype.unshift.apply(restParts, part.parts);
      continue;
    }

    if (newParts.length !== 0 && typeof newParts[newParts.length - 1] === "string" && typeof part === "string") {
      newParts.push(newParts.pop() + part);
      continue;
    }

    newParts.push(part);
  }

  return newParts;
}

function identity(x) {
  return x;
}

function shouldNotPrintClosingTag(node, options) {
  return !node.isSelfClosing && !node.endSourceSpan && (hasPrettierIgnore(node) || shouldPreserveContent(node.parent, options));
}

function countChars(text, char) {
  var counter = 0;

  for (var i = 0; i < text.length; i++) {
    if (text[i] === char) {
      counter++;
    }
  }

  return counter;
}

function unescapeQuoteEntities(text) {
  return text.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
}

module.exports = {
  HTML_ELEMENT_ATTRIBUTES: HTML_ELEMENT_ATTRIBUTES,
  HTML_TAGS: HTML_TAGS,
  canHaveInterpolation: canHaveInterpolation,
  countChars: countChars,
  countParents: countParents,
  dedentString: dedentString,
  forceBreakChildren: forceBreakChildren,
  forceBreakContent: forceBreakContent,
  forceNextEmptyLine: forceNextEmptyLine,
  getLastDescendant: getLastDescendant,
  getNodeCssStyleDisplay: getNodeCssStyleDisplay,
  getNodeCssStyleWhiteSpace: getNodeCssStyleWhiteSpace,
  getPrettierIgnoreAttributeCommentData: getPrettierIgnoreAttributeCommentData,
  hasPrettierIgnore: hasPrettierIgnore,
  identity: identity,
  inferScriptParser: inferScriptParser,
  isDanglingSpaceSensitiveNode: isDanglingSpaceSensitiveNode,
  isFrontMatterNode: isFrontMatterNode,
  isIndentationSensitiveNode: isIndentationSensitiveNode,
  isLeadingSpaceSensitiveNode: isLeadingSpaceSensitiveNode,
  isPreLikeNode: isPreLikeNode,
  isScriptLikeTag: isScriptLikeTag,
  isTextLikeNode: isTextLikeNode,
  isTrailingSpaceSensitiveNode: isTrailingSpaceSensitiveNode,
  isWhitespaceSensitiveNode: isWhitespaceSensitiveNode,
  normalizeParts: normalizeParts,
  preferHardlineAsLeadingSpaces: preferHardlineAsLeadingSpaces,
  preferHardlineAsTrailingSpaces: preferHardlineAsTrailingSpaces,
  shouldNotPrintClosingTag: shouldNotPrintClosingTag,
  shouldPreserveContent: shouldPreserveContent,
  unescapeQuoteEntities: unescapeQuoteEntities
};