! function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(((e = e || self).prettierPlugins = e.prettierPlugins || {}, e.prettierPlugins.html = {}))
}(this, function(e) {
  "use strict";

  function t(e) {
      return (t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
      } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      })(e)
  }

  function n(e, t) {
      if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
  }

  function i(e, t) {
      for (var n = 0; n < t.length; n++) {
          var i = t[n];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
      }
  }

  function r(e, t, n) {
      return t && i(e.prototype, t), n && i(e, n), e
  }

  function a(e, t) {
      if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
      e.prototype = Object.create(t && t.prototype, {
          constructor: {
              value: e,
              writable: !0,
              configurable: !0
          }
      }), t && s(e, t)
  }

  function o(e) {
      return (o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
      })(e)
  }

  function s(e, t) {
      return (s = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
      })(e, t)
  }

  function l(e, t) {
      return !t || "object" != typeof t && "function" != typeof t ? function(e) {
          if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return e
      }(e) : t
  }

  function c(e, t, n) {
      return (c = "undefined" != typeof Reflect && Reflect.get ? Reflect.get : function(e, t, n) {
          var i = function(e, t) {
              for (; !Object.prototype.hasOwnProperty.call(e, t) && null !== (e = o(e)););
              return e
          }(e, t);
          if (i) {
              var r = Object.getOwnPropertyDescriptor(i, t);
              return r.get ? r.get.call(n) : r.value
          }
      })(e, t, n || e)
  }

  function u(e, t) {
      return function(e) {
          if (Array.isArray(e)) return e
      }(e) || function(e, t) {
          if (!(Symbol.iterator in Object(e) || "[object Arguments]" === Object.prototype.toString.call(e))) return;
          var n = [],
              i = !0,
              r = !1,
              a = void 0;
          try {
              for (var o, s = e[Symbol.iterator](); !(i = (o = s.next()).done) && (n.push(o.value), !t || n.length !== t); i = !0);
          } catch (e) {
              r = !0, a = e
          } finally {
              try {
                  i || null == s.return || s.return()
              } finally {
                  if (r) throw a
              }
          }
          return n
      }(e, t) || function() {
          throw new TypeError("Invalid attempt to destructure non-iterable instance")
      }()
  }
  var h = /[|\\{}()[\]^$+*?.]/g,
      p = function(e) {
          if ("string" != typeof e) throw new TypeError("Expected a string");
          return e.replace(h, "\\$&")
      },
      d = {
          "---": "yaml",
          "+++": "toml"
      };
  var f = function(e) {
          var t = Object.keys(d).map(p).join("|"),
              n = e.match(new RegExp("^(".concat(t, ")[^\\n\\S]*\\n(?:([\\s\\S]*?)\\n)?\\1[^\\n\\S]*(\\n|$)")));
          if (null === n) return {
              frontMatter: null,
              content: e
          };
          var i = n[0].replace(/\n$/, ""),
              r = n[1],
              a = n[2];
          return {
              frontMatter: {
                  type: d[r],
                  value: a,
                  raw: i
              },
              content: n[0].replace(/[^\n]/g, " ") + e.slice(n[0].length)
          }
      },
      m = {
          area: "none",
          base: "none",
          basefont: "none",
          datalist: "none",
          head: "none",
          link: "none",
          meta: "none",
          noembed: "none",
          noframes: "none",
          param: "none",
          rp: "none",
          script: "block",
          source: "block",
          style: "none",
          template: "inline",
          track: "block",
          title: "none",
          html: "block",
          body: "block",
          address: "block",
          blockquote: "block",
          center: "block",
          div: "block",
          figure: "block",
          figcaption: "block",
          footer: "block",
          form: "block",
          header: "block",
          hr: "block",
          legend: "block",
          listing: "block",
          main: "block",
          p: "block",
          plaintext: "block",
          pre: "block",
          xmp: "block",
          slot: "contents",
          ruby: "ruby",
          rt: "ruby-text",
          article: "block",
          aside: "block",
          h1: "block",
          h2: "block",
          h3: "block",
          h4: "block",
          h5: "block",
          h6: "block",
          hgroup: "block",
          nav: "block",
          section: "block",
          dir: "block",
          dd: "block",
          dl: "block",
          dt: "block",
          ol: "block",
          ul: "block",
          li: "list-item",
          table: "table",
          caption: "table-caption",
          colgroup: "table-column-group",
          col: "table-column",
          thead: "table-header-group",
          tbody: "table-row-group",
          tfoot: "table-footer-group",
          tr: "table-row",
          td: "table-cell",
          th: "table-cell",
          fieldset: "block",
          button: "inline-block",
          video: "inline-block",
          audio: "inline-block"
      },
      v = "inline",
      _ = {
          listing: "pre",
          plaintext: "pre",
          pre: "pre",
          xmp: "pre",
          nobr: "nowrap",
          table: "initial",
          textarea: "pre-wrap"
      },
      g = "normal",
      y = Object.freeze({
          default: ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"]
      }),
      T = ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"],
      S = ["title"],
      C = ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"],
      k = ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"],
      E = ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"],
      A = ["href", "target"],
      b = ["color", "face", "size"],
      N = ["dir"],
      P = ["cite"],
      x = ["alink", "background", "bgcolor", "link", "text", "vlink"],
      w = ["clear"],
      O = ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"],
      $ = ["height", "width"],
      R = ["align"],
      D = ["align", "char", "charoff", "span", "valign", "width"],
      M = ["align", "char", "charoff", "span", "valign", "width"],
      L = ["value"],
      I = ["cite", "datetime"],
      F = ["open"],
      B = ["title"],
      U = ["open"],
      X = ["compact"],
      j = ["align"],
      V = ["compact"],
      q = ["height", "src", "type", "width"],
      z = ["disabled", "form", "name"],
      H = ["color", "face", "size"],
      G = ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"],
      W = ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"],
      Q = ["cols", "rows"],
      K = ["align"],
      Y = ["align"],
      J = ["align"],
      Z = ["align"],
      ee = ["align"],
      te = ["align"],
      ne = ["profile"],
      ie = ["align", "noshade", "size", "width"],
      re = ["manifest", "version"],
      ae = ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"],
      oe = ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"],
      se = ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"],
      le = ["cite", "datetime"],
      ce = ["prompt"],
      ue = ["accesskey", "for", "form"],
      he = ["accesskey", "align"],
      pe = ["type", "value"],
      de = ["as", "charset", "color", "crossorigin", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"],
      fe = ["name"],
      me = ["compact"],
      ve = ["charset", "content", "http-equiv", "name", "scheme"],
      _e = ["high", "low", "max", "min", "optimum", "value"],
      ge = ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"],
      ye = ["compact", "reversed", "start", "type"],
      Te = ["disabled", "label"],
      Se = ["disabled", "label", "selected", "value"],
      Ce = ["for", "form", "name"],
      ke = ["align"],
      Ee = ["name", "type", "value", "valuetype"],
      Ae = ["width"],
      be = ["max", "value"],
      Ne = ["cite"],
      Pe = ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"],
      xe = ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"],
      we = ["name"],
      Oe = ["media", "sizes", "src", "srcset", "type"],
      $e = ["media", "nonce", "title", "type"],
      Re = ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"],
      De = ["align", "char", "charoff", "valign"],
      Me = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
      Le = ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"],
      Ie = ["align", "char", "charoff", "valign"],
      Fe = ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"],
      Be = ["align", "char", "charoff", "valign"],
      Ue = ["datetime"],
      Xe = ["align", "bgcolor", "char", "charoff", "valign"],
      je = ["default", "kind", "label", "src", "srclang"],
      Ve = ["compact", "type"],
      qe = ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"],
      ze = {
          "*": ["accesskey", "autocapitalize", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"],
          a: T,
          abbr: S,
          applet: C,
          area: k,
          audio: E,
          base: A,
          basefont: b,
          bdo: N,
          blockquote: P,
          body: x,
          br: w,
          button: O,
          canvas: $,
          caption: R,
          col: D,
          colgroup: M,
          data: L,
          del: I,
          details: F,
          dfn: B,
          dialog: U,
          dir: X,
          div: j,
          dl: V,
          embed: q,
          fieldset: z,
          font: H,
          form: G,
          frame: W,
          frameset: Q,
          h1: K,
          h2: Y,
          h3: J,
          h4: Z,
          h5: ee,
          h6: te,
          head: ne,
          hr: ie,
          html: re,
          iframe: ae,
          img: oe,
          input: se,
          ins: le,
          isindex: ce,
          label: ue,
          legend: he,
          li: pe,
          link: de,
          map: fe,
          menu: me,
          meta: ve,
          meter: _e,
          object: ge,
          ol: ye,
          optgroup: Te,
          option: Se,
          output: Ce,
          p: ke,
          param: Ee,
          pre: Ae,
          progress: be,
          q: Ne,
          script: Pe,
          select: xe,
          slot: we,
          source: Oe,
          style: $e,
          table: Re,
          tbody: De,
          td: Me,
          textarea: Le,
          tfoot: Ie,
          th: Fe,
          thead: Be,
          time: Ue,
          tr: Xe,
          track: je,
          ul: Ve,
          video: qe
      },
      He = Object.freeze({
          a: T,
          abbr: S,
          applet: C,
          area: k,
          audio: E,
          base: A,
          basefont: b,
          bdo: N,
          blockquote: P,
          body: x,
          br: w,
          button: O,
          canvas: $,
          caption: R,
          col: D,
          colgroup: M,
          data: L,
          del: I,
          details: F,
          dfn: B,
          dialog: U,
          dir: X,
          div: j,
          dl: V,
          embed: q,
          fieldset: z,
          font: H,
          form: G,
          frame: W,
          frameset: Q,
          h1: K,
          h2: Y,
          h3: J,
          h4: Z,
          h5: ee,
          h6: te,
          head: ne,
          hr: ie,
          html: re,
          iframe: ae,
          img: oe,
          input: se,
          ins: le,
          isindex: ce,
          label: ue,
          legend: he,
          li: pe,
          link: de,
          map: fe,
          menu: me,
          meta: ve,
          meter: _e,
          object: ge,
          ol: ye,
          optgroup: Te,
          option: Se,
          output: Ce,
          p: ke,
          param: Ee,
          pre: Ae,
          progress: be,
          q: Ne,
          script: Pe,
          select: xe,
          slot: we,
          source: Oe,
          style: $e,
          table: Re,
          tbody: De,
          td: Me,
          textarea: Le,
          tfoot: Ie,
          th: Fe,
          thead: Be,
          time: Ue,
          tr: Xe,
          track: je,
          ul: Ve,
          video: qe,
          default: ze
      });

  function Ge(e) {
      return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
  }

  function We(e, t) {
      return e(t = {
          exports: {}
      }, t.exports), t.exports
  }

  function Qe(e) {
      return e && e.default || e
  }
  var Ke = Qe(y),
      Ye = Qe(He),
      Je = m,
      Ze = v,
      et = _,
      tt = g,
      nt = it(Ke);

  function it(e) {
      var t = Object.create(null),
          n = !0,
          i = !1,
          r = void 0;
      try {
          for (var a, o = e[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
              t[a.value] = !0
          }
      } catch (e) {
          i = !0, r = e
      } finally {
          try {
              n || null == o.return || o.return()
          } finally {
              // Changed by Fliplet to make it work on IE11
              // if (i) throw r
          }
      }
      return t
  }

  function rt(e, t) {
      return !("element" !== e.type || "template" !== e.fullName || !e.attrMap.lang || "html" === e.attrMap.lang) || (!("ieConditionalComment" !== e.type || !e.lastChild || e.lastChild.isSelfClosing || e.lastChild.endSourceSpan) || ("ieConditionalComment" === e.type && !e.complete || ("vue" === t.parser && "element" === e.type && "root" === e.parent.type && -1 === ["template", "style", "script", "html"].indexOf(e.fullName) || !(!_t(e) || !e.children.some(function(e) {
          return "text" !== e.type && "interpolation" !== e.type
      })))))
  }

  function at(e) {
      return "attribute" !== e.type && !ot(e) && (!!e.parent && ("number" == typeof e.index && 0 !== e.index && function(e) {
          return "comment" === e.type && "prettier-ignore" === e.value.trim()
      }(e.parent.children[e.index - 1])))
  }

  function ot(e) {
      return "text" === e.type || "comment" === e.type
  }

  function st(e) {
      return "element" === e.type && ("script" === e.fullName || "style" === e.fullName || "svg:style" === e.fullName)
  }

  function lt(e) {
      return "yaml" === e.type || "toml" === e.type
  }

  function ct(e) {
      return gt(e).startsWith("pre")
  }

  function ut(e) {
      return "element" === e.type && 0 !== e.children.length && (-1 !== ["html", "head", "ul", "ol", "select"].indexOf(e.name) || e.cssDisplay.startsWith("table") && "table-cell" !== e.cssDisplay)
  }

  function ht(e) {
      return mt(e) || "element" === e.type && "br" === e.fullName || pt(e)
  }

  function pt(e) {
      return dt(e) && ft(e)
  }

  function dt(e) {
      return e.hasLeadingSpaces && (e.prev ? e.prev.sourceSpan.end.line < e.sourceSpan.start.line : "root" === e.parent.type || e.parent.startSourceSpan.end.line < e.sourceSpan.start.line)
  }

  function ft(e) {
      return e.hasTrailingSpaces && (e.next ? e.next.sourceSpan.start.line > e.sourceSpan.end.line : "root" === e.parent.type || e.parent.endSourceSpan.start.line > e.sourceSpan.end.line)
  }

  function mt(e) {
      switch (e.type) {
          case "ieConditionalComment":
          case "comment":
          case "directive":
              return !0;
          case "element":
              return -1 !== ["script", "select"].indexOf(e.name)
      }
      return !1
  }

  function vt(e) {
      return "block" === e || "list-item" === e || e.startsWith("table")
  }

  function _t(e) {
      return gt(e).startsWith("pre")
  }

  function gt(e) {
      return "element" === e.type && !e.namespace && et[e.name] || tt
  }
  var yt = {
      HTML_ELEMENT_ATTRIBUTES: function(e, t) {
          for (var n = Object.create(null), i = 0, r = Object.keys(e); i < r.length; i++) {
              var a = r[i];
              n[a] = t(e[a], a)
          }
          return n
      }(Ye, it),
      HTML_TAGS: nt,
      canHaveInterpolation: function(e) {
          return e.children && !st(e)
      },
      countChars: function(e, t) {
          for (var n = 0, i = 0; i < e.length; i++) e[i] === t && n++;
          return n
      },
      countParents: function(e) {
          for (var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {
                  return !0
              }, i = 0, r = e.stack.length - 1; r >= 0; r--) {
              var a = e.stack[r];
              a && "object" === t(a) && !Array.isArray(a) && n(a) && i++
          }
          return i
      },
      dedentString: function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
              var t = 1 / 0,
                  n = !0,
                  i = !1,
                  r = void 0;
              try {
                  for (var a, o = e.split("\n")[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                      var s = a.value;
                      if (0 !== s.length) {
                          if (/\S/.test(s[0])) return 0;
                          var l = s.match(/^\s*/)[0].length;
                          s.length !== l && l < t && (t = l)
                      }
                  }
              } catch (e) {
                  i = !0, r = e
              } finally {
                  try {
                      n || null == o.return || o.return()
                  } finally {
                      if (i) throw r
                  }
              }
              return t === 1 / 0 ? 0 : t
          }(e);
          return 0 === t ? e : e.split("\n").map(function(e) {
              return e.slice(t)
          }).join("\n")
      },
      forceBreakChildren: ut,
      forceBreakContent: function(e) {
          return ut(e) || "element" === e.type && 0 !== e.children.length && (-1 !== ["body", "script", "style"].indexOf(e.name) || e.children.some(function(e) {
              return function(e) {
                  return e.children && e.children.some(function(e) {
                      return "text" !== e.type
                  })
              }(e)
          })) || e.firstChild && e.firstChild === e.lastChild && dt(e.firstChild) && (!e.lastChild.isTrailingSpaceSensitive || ft(e.lastChild))
      },
      forceNextEmptyLine: function(e) {
          return lt(e) || e.next && e.sourceSpan.end.line + 1 < e.next.sourceSpan.start.line
      },
      getLastDescendant: function e(t) {
          return t.lastChild ? e(t.lastChild) : t
      },
      getNodeCssStyleDisplay: function(e, t) {
          if (e.prev && "comment" === e.prev.type) {
              var n = e.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
              if (n) return n[1]
          }
          var i = !1;
          if ("element" === e.type && "svg" === e.namespace) {
              if (! function(e, t) {
                      for (var n = e; n;) {
                          if (t(n)) return !0;
                          n = n.parent
                      }
                      return !1
                  }(e, function(e) {
                      return "svg:foreignObject" === e.fullName
                  })) return "svg" === e.name ? "inline-block" : "block";
              i = !0
          }
          switch (t.htmlWhitespaceSensitivity) {
              case "strict":
                  return "inline";
              case "ignore":
                  return "block";
              default:
                  return "element" === e.type && (!e.namespace || i) && Je[e.name] || Ze
          }
      },
      getNodeCssStyleWhiteSpace: gt,
      getPrettierIgnoreAttributeCommentData: function(e) {
          var t = e.trim().match(/^prettier-ignore-attribute(?:\s+([^]+))?$/);
          return !!t && (!t[1] || t[1].split(/\s+/))
      },
      hasPrettierIgnore: at,
      identity: function(e) {
          return e
      },
      inferScriptParser: function(e) {
          if ("script" === e.name && !e.attrMap.src) {
              if (!e.attrMap.lang && !e.attrMap.type || "module" === e.attrMap.type || "text/javascript" === e.attrMap.type || "text/babel" === e.attrMap.type || "application/javascript" === e.attrMap.type) return "babel";
              if ("application/x-typescript" === e.attrMap.type || "ts" === e.attrMap.lang || "tsx" === e.attrMap.lang) return "typescript";
              if ("text/markdown" === e.attrMap.type) return "markdown";
              if (e.attrMap.type.endsWith("json") || e.attrMap.type.endsWith("importmap")) return "json"
          }
          if ("style" === e.name) {
              if (!e.attrMap.lang || "postcss" === e.attrMap.lang) return "css";
              if ("scss" === e.attrMap.lang) return "scss";
              if ("less" === e.attrMap.lang) return "less"
          }
          return null
      },
      isDanglingSpaceSensitiveNode: function(e) {
          return !vt(t = e.cssDisplay) && "inline-block" !== t && !st(e);
          var t
      },
      isFrontMatterNode: lt,
      isIndentationSensitiveNode: ct,
      isLeadingSpaceSensitiveNode: function(e) {
          var t = function() {
              if (lt(e)) return !1;
              if (("text" === e.type || "interpolation" === e.type) && e.prev && ("text" === e.prev.type || "interpolation" === e.prev.type)) return !0;
              if (!e.parent || "none" === e.parent.cssDisplay) return !1;
              if (_t(e.parent)) return !0;
              if (!e.prev && ("root" === e.parent.type || st(e.parent) || (t = e.parent.cssDisplay, vt(t) || "inline-block" === t))) return !1;
              var t;
              if (e.prev && ! function(e) {
                      return !vt(e)
                  }(e.prev.cssDisplay)) return !1;
              return !0
          }();
          return t && !e.prev && e.parent && e.parent.tagDefinition && e.parent.tagDefinition.ignoreFirstLf ? "interpolation" === e.type : t
      },
      isPreLikeNode: _t,
      isScriptLikeTag: st,
      isTextLikeNode: ot,
      isTrailingSpaceSensitiveNode: function(e) {
          return !lt(e) && (!("text" !== e.type && "interpolation" !== e.type || !e.next || "text" !== e.next.type && "interpolation" !== e.next.type) || !(!e.parent || "none" === e.parent.cssDisplay) && (!!_t(e.parent) || !(!e.next && ("root" === e.parent.type || st(e.parent) || (t = e.parent.cssDisplay, vt(t) || "inline-block" === t))) && !(e.next && ! function(e) {
              return !vt(e)
          }(e.next.cssDisplay))));
          var t
      },
      isWhitespaceSensitiveNode: function(e) {
          return st(e) || "interpolation" === e.type || ct(e)
      },
      normalizeParts: function(e) {
          for (var t = [], n = e.slice(); 0 !== n.length;) {
              var i = n.shift();
              i && ("concat" !== i.type ? 0 === t.length || "string" != typeof t[t.length - 1] || "string" != typeof i ? t.push(i) : t.push(t.pop() + i) : Array.prototype.unshift.apply(n, i.parts))
          }
          return t
      },
      preferHardlineAsLeadingSpaces: function(e) {
          return mt(e) || e.prev && ht(e.prev) || pt(e)
      },
      preferHardlineAsTrailingSpaces: ht,
      shouldNotPrintClosingTag: function(e, t) {
          return !e.isSelfClosing && !e.endSourceSpan && (at(e) || rt(e.parent, t))
      },
      shouldPreserveContent: rt,
      unescapeQuoteEntities: function(e) {
          return e.replace(/&apos;/g, "'").replace(/&quot;/g, '"')
      }
  };
  var Tt = function(e) {
      return /^\s*<!--\s*@(format|prettier)\s*-->/.test(e)
  };
  var St = function(e, t) {
          var n = new SyntaxError(e + " (" + t.start.line + ":" + t.start.column + ")");
          return n.loc = t, n
      },
      Ct = {
          attrs: !0,
          children: !0
      },
      kt = function() {
          function e() {
              var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              n(this, e);
              for (var i = 0, r = Object.keys(t); i < r.length; i++) {
                  var a = r[i],
                      o = t[a];
                  a in Ct ? this._setNodes(a, o) : this[a] = o
              }
          }
          return r(e, [{
              key: "_setNodes",
              value: function(e, t) {
                  t !== this[e] && (this[e] = At(t, this), "attrs" === e && bt(this, {
                      attrMap: this[e].reduce(function(e, t) {
                          return e[t.fullName] = t.value, e
                      }, Object.create(null))
                  }))
              }
          }, {
              key: "map",
              value: function(t) {
                  var n = null;
                  for (var i in Ct) {
                      var r = this[i];
                      if (r) {
                          var a = Et(r, function(e) {
                              return e.map(t)
                          });
                          n !== r && (n || (n = new e), n._setNodes(i, a))
                      }
                  }
                  if (n) {
                      for (var o in this) o in Ct || (n[o] = this[o]);
                      bt(n, {
                          index: this.index,
                          siblings: this.siblings,
                          prev: this.prev,
                          next: this.next,
                          parent: this.parent
                      })
                  }
                  return t(n || this)
              }
          }, {
              key: "clone",
              value: function(t) {
                  return new e(t ? Object.assign({}, this, t) : this)
              }
          }, {
              key: "firstChild",
              get: function() {
                  return this.children && 0 !== this.children.length ? this.children[0] : null
              }
          }, {
              key: "lastChild",
              get: function() {
                  return this.children && 0 !== this.children.length ? this.children[this.children.length - 1] : null
              }
          }, {
              key: "rawName",
              get: function() {
                  return this.hasExplicitNamespace ? this.fullName : this.name
              }
          }, {
              key: "fullName",
              get: function() {
                  return this.namespace ? this.namespace + ":" + this.name : this.name
              }
          }]), e
      }();

  function Et(e, t) {
      var n = e.map(t);
      return n.some(function(t, n) {
          return t !== e[n]
      }) ? n : e
  }

  function At(e, t) {
      for (var n = e.map(function(e) {
              return e instanceof kt ? e.clone() : new kt(e)
          }), i = null, r = n[0], a = n[1] || null, o = 0; o < n.length; o++) bt(r, {
          index: o,
          siblings: n,
          prev: i,
          next: a,
          parent: t
      }), i = r, r = a, a = n[o + 2] || null;
      return n
  }

  function bt(e, t) {
      var n = Object.keys(t).reduce(function(e, n) {
          return e[n] = {
              value: t[n],
              enumerable: !1
          }, e
      }, {});
      Object.defineProperties(e, n)
  }
  var Nt = {
          Node: kt
      },
      Pt = [
          [/^(\[if([^\]]*?)\]>)([\s\S]*?)<!\s*\[endif\]$/, function(e, t, n) {
              var i = u(n, 4),
                  r = i[1],
                  a = i[2],
                  o = i[3],
                  s = "\x3c!--".length + r.length,
                  l = e.sourceSpan.start.moveBy(s),
                  c = l.moveBy(o.length),
                  h = e.sourceSpan.constructor,
                  p = u(function() {
                      try {
                          return [!0, t(o, l).children]
                      } catch (e) {
                          return [!1, [{
                              type: "text",
                              value: o,
                              sourceSpan: new h(l, c)
                          }]]
                      }
                  }(), 2),
                  d = p[0],
                  f = p[1];
              return {
                  type: "ieConditionalComment",
                  complete: d,
                  children: f,
                  condition: a.trim().replace(/\s+/g, " "),
                  sourceSpan: e.sourceSpan,
                  startSourceSpan: new h(e.sourceSpan.start, l),
                  endSourceSpan: new h(c, e.sourceSpan.end)
              }
          }],
          [/^\[if([^\]]*?)\]><!$/, function(e, t, n) {
              return {
                  type: "ieConditionalStartComment",
                  condition: u(n, 2)[1].trim().replace(/\s+/g, " "),
                  sourceSpan: e.sourceSpan
              }
          }],
          [/^<!\s*\[endif\]$/, function(e) {
              return {
                  type: "ieConditionalEndComment",
                  sourceSpan: e.sourceSpan
              }
          }]
      ];
  var xt = function(e, t) {
          if (e.value) {
              var n, i = !0,
                  r = !1,
                  a = void 0;
              try {
                  for (var o, s = Pt[Symbol.iterator](); !(i = (o = s.next()).done); i = !0) {
                      var l = u(o.value, 2),
                          c = l[0],
                          h = l[1];
                      if (n = e.value.match(c)) return h(e, t, n)
                  }
              } catch (e) {
                  r = !0, a = e
              } finally {
                  try {
                      i || null == s.return || s.return()
                  } finally {
                      if (r) throw a
                  }
              }
          }
          return null
      },
      wt = We(function(e, t) {
          function n(e) {
              if (":" != e[0]) return [null, e];
              var t = e.indexOf(":", 1);
              if (-1 == t) throw new Error('Unsupported format "'.concat(e, '" expecting ":namespace:name"'));
              return [e.slice(1, t), e.slice(t + 1)]
          }
          Object.defineProperty(t, "__esModule", {
                  value: !0
              }),
              function(e) {
                  e[e.RAW_TEXT = 0] = "RAW_TEXT", e[e.ESCAPABLE_RAW_TEXT = 1] = "ESCAPABLE_RAW_TEXT", e[e.PARSABLE_DATA = 2] = "PARSABLE_DATA"
              }(t.TagContentType || (t.TagContentType = {})), t.splitNsName = n, t.isNgContainer = function(e) {
                  return "ng-container" === n(e)[1]
              }, t.isNgContent = function(e) {
                  return "ng-content" === n(e)[1]
              }, t.isNgTemplate = function(e) {
                  return "ng-template" === n(e)[1]
              }, t.getNsPrefix = function(e) {
                  return null === e ? null : n(e)[0]
              }, t.mergeNsAndName = function(e, t) {
                  return e ? ":".concat(e, ":").concat(t) : t
              }, t.NAMED_ENTITIES = {
                  Aacute: "Á",
                  aacute: "á",
                  Acirc: "Â",
                  acirc: "â",
                  acute: "´",
                  AElig: "Æ",
                  aelig: "æ",
                  Agrave: "À",
                  agrave: "à",
                  alefsym: "ℵ",
                  Alpha: "Α",
                  alpha: "α",
                  amp: "&",
                  and: "∧",
                  ang: "∠",
                  apos: "'",
                  Aring: "Å",
                  aring: "å",
                  asymp: "≈",
                  Atilde: "Ã",
                  atilde: "ã",
                  Auml: "Ä",
                  auml: "ä",
                  bdquo: "„",
                  Beta: "Β",
                  beta: "β",
                  brvbar: "¦",
                  bull: "•",
                  cap: "∩",
                  Ccedil: "Ç",
                  ccedil: "ç",
                  cedil: "¸",
                  cent: "¢",
                  Chi: "Χ",
                  chi: "χ",
                  circ: "ˆ",
                  clubs: "♣",
                  cong: "≅",
                  copy: "©",
                  crarr: "↵",
                  cup: "∪",
                  curren: "¤",
                  dagger: "†",
                  Dagger: "‡",
                  darr: "↓",
                  dArr: "⇓",
                  deg: "°",
                  Delta: "Δ",
                  delta: "δ",
                  diams: "♦",
                  divide: "÷",
                  Eacute: "É",
                  eacute: "é",
                  Ecirc: "Ê",
                  ecirc: "ê",
                  Egrave: "È",
                  egrave: "è",
                  empty: "∅",
                  emsp: " ",
                  ensp: " ",
                  Epsilon: "Ε",
                  epsilon: "ε",
                  equiv: "≡",
                  Eta: "Η",
                  eta: "η",
                  ETH: "Ð",
                  eth: "ð",
                  Euml: "Ë",
                  euml: "ë",
                  euro: "€",
                  exist: "∃",
                  fnof: "ƒ",
                  forall: "∀",
                  frac12: "½",
                  frac14: "¼",
                  frac34: "¾",
                  frasl: "⁄",
                  Gamma: "Γ",
                  gamma: "γ",
                  ge: "≥",
                  gt: ">",
                  harr: "↔",
                  hArr: "⇔",
                  hearts: "♥",
                  hellip: "…",
                  Iacute: "Í",
                  iacute: "í",
                  Icirc: "Î",
                  icirc: "î",
                  iexcl: "¡",
                  Igrave: "Ì",
                  igrave: "ì",
                  image: "ℑ",
                  infin: "∞",
                  int: "∫",
                  Iota: "Ι",
                  iota: "ι",
                  iquest: "¿",
                  isin: "∈",
                  Iuml: "Ï",
                  iuml: "ï",
                  Kappa: "Κ",
                  kappa: "κ",
                  Lambda: "Λ",
                  lambda: "λ",
                  lang: "⟨",
                  laquo: "«",
                  larr: "←",
                  lArr: "⇐",
                  lceil: "⌈",
                  ldquo: "“",
                  le: "≤",
                  lfloor: "⌊",
                  lowast: "∗",
                  loz: "◊",
                  lrm: "‎",
                  lsaquo: "‹",
                  lsquo: "‘",
                  lt: "<",
                  macr: "¯",
                  mdash: "—",
                  micro: "µ",
                  middot: "·",
                  minus: "−",
                  Mu: "Μ",
                  mu: "μ",
                  nabla: "∇",
                  nbsp: " ",
                  ndash: "–",
                  ne: "≠",
                  ni: "∋",
                  not: "¬",
                  notin: "∉",
                  nsub: "⊄",
                  Ntilde: "Ñ",
                  ntilde: "ñ",
                  Nu: "Ν",
                  nu: "ν",
                  Oacute: "Ó",
                  oacute: "ó",
                  Ocirc: "Ô",
                  ocirc: "ô",
                  OElig: "Œ",
                  oelig: "œ",
                  Ograve: "Ò",
                  ograve: "ò",
                  oline: "‾",
                  Omega: "Ω",
                  omega: "ω",
                  Omicron: "Ο",
                  omicron: "ο",
                  oplus: "⊕",
                  or: "∨",
                  ordf: "ª",
                  ordm: "º",
                  Oslash: "Ø",
                  oslash: "ø",
                  Otilde: "Õ",
                  otilde: "õ",
                  otimes: "⊗",
                  Ouml: "Ö",
                  ouml: "ö",
                  para: "¶",
                  permil: "‰",
                  perp: "⊥",
                  Phi: "Φ",
                  phi: "φ",
                  Pi: "Π",
                  pi: "π",
                  piv: "ϖ",
                  plusmn: "±",
                  pound: "£",
                  prime: "′",
                  Prime: "″",
                  prod: "∏",
                  prop: "∝",
                  Psi: "Ψ",
                  psi: "ψ",
                  quot: '"',
                  radic: "√",
                  rang: "⟩",
                  raquo: "»",
                  rarr: "→",
                  rArr: "⇒",
                  rceil: "⌉",
                  rdquo: "”",
                  real: "ℜ",
                  reg: "®",
                  rfloor: "⌋",
                  Rho: "Ρ",
                  rho: "ρ",
                  rlm: "‏",
                  rsaquo: "›",
                  rsquo: "’",
                  sbquo: "‚",
                  Scaron: "Š",
                  scaron: "š",
                  sdot: "⋅",
                  sect: "§",
                  shy: "­",
                  Sigma: "Σ",
                  sigma: "σ",
                  sigmaf: "ς",
                  sim: "∼",
                  spades: "♠",
                  sub: "⊂",
                  sube: "⊆",
                  sum: "∑",
                  sup: "⊃",
                  sup1: "¹",
                  sup2: "²",
                  sup3: "³",
                  supe: "⊇",
                  szlig: "ß",
                  Tau: "Τ",
                  tau: "τ",
                  there4: "∴",
                  Theta: "Θ",
                  theta: "θ",
                  thetasym: "ϑ",
                  thinsp: " ",
                  THORN: "Þ",
                  thorn: "þ",
                  tilde: "˜",
                  times: "×",
                  trade: "™",
                  Uacute: "Ú",
                  uacute: "ú",
                  uarr: "↑",
                  uArr: "⇑",
                  Ucirc: "Û",
                  ucirc: "û",
                  Ugrave: "Ù",
                  ugrave: "ù",
                  uml: "¨",
                  upsih: "ϒ",
                  Upsilon: "Υ",
                  upsilon: "υ",
                  Uuml: "Ü",
                  uuml: "ü",
                  weierp: "℘",
                  Xi: "Ξ",
                  xi: "ξ",
                  Yacute: "Ý",
                  yacute: "ý",
                  yen: "¥",
                  yuml: "ÿ",
                  Yuml: "Ÿ",
                  Zeta: "Ζ",
                  zeta: "ζ",
                  zwj: "‍",
                  zwnj: "‌"
              }, t.NGSP_UNICODE = "", t.NAMED_ENTITIES.ngsp = t.NGSP_UNICODE
      });
  Ge(wt);
  wt.TagContentType, wt.splitNsName, wt.isNgContainer, wt.isNgContent, wt.isNgTemplate, wt.getNsPrefix, wt.mergeNsAndName, wt.NAMED_ENTITIES, wt.NGSP_UNICODE;
  var Ot = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i, a, o = function() {
          function e() {
              var t = this,
                  i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                  r = i.closedByChildren,
                  a = i.requiredParents,
                  o = i.implicitNamespacePrefix,
                  s = i.contentType,
                  l = void 0 === s ? wt.TagContentType.PARSABLE_DATA : s,
                  c = i.closedByParent,
                  u = void 0 !== c && c,
                  h = i.isVoid,
                  p = void 0 !== h && h,
                  d = i.ignoreFirstLf,
                  f = void 0 !== d && d;
              n(this, e), this.closedByChildren = {}, this.closedByParent = !1, this.canSelfClose = !1, r && r.length > 0 && r.forEach(function(e) {
                  return t.closedByChildren[e] = !0
              }), this.isVoid = p, this.closedByParent = u || p, a && a.length > 0 && (this.requiredParents = {}, this.parentToAdd = a[0], a.forEach(function(e) {
                  return t.requiredParents[e] = !0
              })), this.implicitNamespacePrefix = o || null, this.contentType = l, this.ignoreFirstLf = f
          }
          return r(e, [{
              key: "requireExtraParent",
              value: function(e) {
                  if (!this.requiredParents) return !1;
                  if (!e) return !0;
                  var t = e.toLowerCase();
                  return !("template" === t || "ng-template" === e) && 1 != this.requiredParents[t]
              }
          }, {
              key: "isClosedByChild",
              value: function(e) {
                  return this.isVoid || e.toLowerCase() in this.closedByChildren
              }
          }]), e
      }();
      t.HtmlTagDefinition = o, t.getHtmlTagDefinition = function(e) {
          return a || (i = new o, a = {
              base: new o({
                  isVoid: !0
              }),
              meta: new o({
                  isVoid: !0
              }),
              area: new o({
                  isVoid: !0
              }),
              embed: new o({
                  isVoid: !0
              }),
              link: new o({
                  isVoid: !0
              }),
              img: new o({
                  isVoid: !0
              }),
              input: new o({
                  isVoid: !0
              }),
              param: new o({
                  isVoid: !0
              }),
              hr: new o({
                  isVoid: !0
              }),
              br: new o({
                  isVoid: !0
              }),
              source: new o({
                  isVoid: !0
              }),
              track: new o({
                  isVoid: !0
              }),
              wbr: new o({
                  isVoid: !0
              }),
              p: new o({
                  closedByChildren: ["address", "article", "aside", "blockquote", "div", "dl", "fieldset", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "main", "nav", "ol", "p", "pre", "section", "table", "ul"],
                  closedByParent: !0
              }),
              thead: new o({
                  closedByChildren: ["tbody", "tfoot"]
              }),
              tbody: new o({
                  closedByChildren: ["tbody", "tfoot"],
                  closedByParent: !0
              }),
              tfoot: new o({
                  closedByChildren: ["tbody"],
                  closedByParent: !0
              }),
              tr: new o({
                  closedByChildren: ["tr"],
                  requiredParents: ["tbody", "tfoot", "thead"],
                  closedByParent: !0
              }),
              td: new o({
                  closedByChildren: ["td", "th"],
                  closedByParent: !0
              }),
              th: new o({
                  closedByChildren: ["td", "th"],
                  closedByParent: !0
              }),
              col: new o({
                  requiredParents: ["colgroup"],
                  isVoid: !0
              }),
              svg: new o({
                  implicitNamespacePrefix: "svg"
              }),
              math: new o({
                  implicitNamespacePrefix: "math"
              }),
              li: new o({
                  closedByChildren: ["li"],
                  closedByParent: !0
              }),
              dt: new o({
                  closedByChildren: ["dt", "dd"]
              }),
              dd: new o({
                  closedByChildren: ["dt", "dd"],
                  closedByParent: !0
              }),
              rb: new o({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0
              }),
              rt: new o({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0
              }),
              rtc: new o({
                  closedByChildren: ["rb", "rtc", "rp"],
                  closedByParent: !0
              }),
              rp: new o({
                  closedByChildren: ["rb", "rt", "rtc", "rp"],
                  closedByParent: !0
              }),
              optgroup: new o({
                  closedByChildren: ["optgroup"],
                  closedByParent: !0
              }),
              option: new o({
                  closedByChildren: ["option", "optgroup"],
                  closedByParent: !0
              }),
              pre: new o({
                  ignoreFirstLf: !0
              }),
              listing: new o({
                  ignoreFirstLf: !0
              }),
              style: new o({
                  contentType: wt.TagContentType.RAW_TEXT
              }),
              script: new o({
                  contentType: wt.TagContentType.RAW_TEXT
              }),
              title: new o({
                  contentType: wt.TagContentType.ESCAPABLE_RAW_TEXT
              }),
              textarea: new o({
                  contentType: wt.TagContentType.ESCAPABLE_RAW_TEXT,
                  ignoreFirstLf: !0
              })
          }), a[e] || i
      }
  });
  Ge(Ot);
  Ot.HtmlTagDefinition, Ot.getHtmlTagDefinition;
  var $t = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.assertArrayOfStrings = function(e, t) {
          if (null != t) {
              if (!Array.isArray(t)) throw new Error("Expected '".concat(e, "' to be an array of strings."));
              for (var n = 0; n < t.length; n += 1)
                  if ("string" != typeof t[n]) throw new Error("Expected '".concat(e, "' to be an array of strings."))
          }
      };
      var n = [/^\s*$/, /[<>]/, /^[{}]$/, /&(#|[a-z])/i, /^\/\//];
      t.assertInterpolationSymbols = function(e, t) {
          if (!(null == t || Array.isArray(t) && 2 == t.length)) throw new Error("Expected '".concat(e, "' to be an array, [start, end]."));
          if (null != t) {
              var i = t[0],
                  r = t[1];
              n.forEach(function(e) {
                  if (e.test(i) || e.test(r)) throw new Error("['".concat(i, "', '").concat(r, "'] contains unusable interpolation symbol."))
              })
          }
      }
  });
  Ge($t);
  $t.assertArrayOfStrings, $t.assertInterpolationSymbols;
  var Rt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function() {
          function e(t, i) {
              n(this, e), this.start = t, this.end = i
          }
          return r(e, null, [{
              key: "fromArray",
              value: function(n) {
                  return n ? ($t.assertInterpolationSymbols("interpolation", n), new e(n[0], n[1])) : t.DEFAULT_INTERPOLATION_CONFIG
              }
          }]), e
      }();
      t.InterpolationConfig = i, t.DEFAULT_INTERPOLATION_CONFIG = new i("{{", "}}")
  });
  Ge(Rt);
  Rt.InterpolationConfig, Rt.DEFAULT_INTERPOLATION_CONFIG;
  var Dt = We(function(e, t) {
      function n(e) {
          return t.$0 <= e && e <= t.$9
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }), t.$EOF = 0, t.$TAB = 9, t.$LF = 10, t.$VTAB = 11, t.$FF = 12, t.$CR = 13, t.$SPACE = 32, t.$BANG = 33, t.$DQ = 34, t.$HASH = 35, t.$$ = 36, t.$PERCENT = 37, t.$AMPERSAND = 38, t.$SQ = 39, t.$LPAREN = 40, t.$RPAREN = 41, t.$STAR = 42, t.$PLUS = 43, t.$COMMA = 44, t.$MINUS = 45, t.$PERIOD = 46, t.$SLASH = 47, t.$COLON = 58, t.$SEMICOLON = 59, t.$LT = 60, t.$EQ = 61, t.$GT = 62, t.$QUESTION = 63, t.$0 = 48, t.$9 = 57, t.$A = 65, t.$E = 69, t.$F = 70, t.$X = 88, t.$Z = 90, t.$LBRACKET = 91, t.$BACKSLASH = 92, t.$RBRACKET = 93, t.$CARET = 94, t.$_ = 95, t.$a = 97, t.$e = 101, t.$f = 102, t.$n = 110, t.$r = 114, t.$t = 116, t.$u = 117, t.$v = 118, t.$x = 120, t.$z = 122, t.$LBRACE = 123, t.$BAR = 124, t.$RBRACE = 125, t.$NBSP = 160, t.$PIPE = 124, t.$TILDA = 126, t.$AT = 64, t.$BT = 96, t.isWhitespace = function(e) {
          return e >= t.$TAB && e <= t.$SPACE || e == t.$NBSP
      }, t.isDigit = n, t.isAsciiLetter = function(e) {
          return e >= t.$a && e <= t.$z || e >= t.$A && e <= t.$Z
      }, t.isAsciiHexDigit = function(e) {
          return e >= t.$a && e <= t.$f || e >= t.$A && e <= t.$F || n(e)
      }
  });
  Ge(Dt);
  Dt.$EOF, Dt.$TAB, Dt.$LF, Dt.$VTAB, Dt.$FF, Dt.$CR, Dt.$SPACE, Dt.$BANG, Dt.$DQ, Dt.$HASH, Dt.$$, Dt.$PERCENT, Dt.$AMPERSAND, Dt.$SQ, Dt.$LPAREN, Dt.$RPAREN, Dt.$STAR, Dt.$PLUS, Dt.$COMMA, Dt.$MINUS, Dt.$PERIOD, Dt.$SLASH, Dt.$COLON, Dt.$SEMICOLON, Dt.$LT, Dt.$EQ, Dt.$GT, Dt.$QUESTION, Dt.$0, Dt.$9, Dt.$A, Dt.$E, Dt.$F, Dt.$X, Dt.$Z, Dt.$LBRACKET, Dt.$BACKSLASH, Dt.$RBRACKET, Dt.$CARET, Dt.$_, Dt.$a, Dt.$e, Dt.$f, Dt.$n, Dt.$r, Dt.$t, Dt.$u, Dt.$v, Dt.$x, Dt.$z, Dt.$LBRACE, Dt.$BAR, Dt.$RBRACE, Dt.$NBSP, Dt.$PIPE, Dt.$TILDA, Dt.$AT, Dt.$BT, Dt.isWhitespace, Dt.isDigit, Dt.isAsciiLetter, Dt.isAsciiHexDigit;
  var Mt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function() {
          function e(t, i, r) {
              n(this, e), this.filePath = t, this.name = i, this.members = r
          }
          return r(e, [{
              key: "assertNoMembers",
              value: function() {
                  if (this.members.length) throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."))
              }
          }]), e
      }();
      t.StaticSymbol = i;
      var a = function() {
          function e() {
              n(this, e), this.cache = new Map
          }
          return r(e, [{
              key: "get",
              value: function(e, t, n) {
                  var r = (n = n || []).length ? ".".concat(n.join(".")) : "",
                      a = '"'.concat(e, '".').concat(t).concat(r),
                      o = this.cache.get(a);
                  return o || (o = new i(e, t, n), this.cache.set(a, o)), o
              }
          }]), e
      }();
      t.StaticSymbolCache = a
  });
  Ge(Mt);
  Mt.StaticSymbol, Mt.StaticSymbolCache;
  var Lt = We(function(e, i) {
      Object.defineProperty(i, "__esModule", {
          value: !0
      });
      var a = /-+([a-z0-9])/g;

      function o(e, t, n) {
          var i = e.indexOf(t);
          return -1 == i ? n : [e.slice(0, i).trim(), e.slice(i + 1).trim()]
      }

      function s(e, n, i) {
          return Array.isArray(e) ? n.visitArray(e, i) : "object" === t(r = e) && null !== r && Object.getPrototypeOf(r) === h ? n.visitStringMap(e, i) : null == e || "string" == typeof e || "number" == typeof e || "boolean" == typeof e ? n.visitPrimitive(e, i) : n.visitOther(e, i);
          var r
      }
      i.dashCaseToCamelCase = function(e) {
          return e.replace(a, function() {
              for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
              return t[1].toUpperCase()
          })
      }, i.splitAtColon = function(e, t) {
          return o(e, ":", t)
      }, i.splitAtPeriod = function(e, t) {
          return o(e, ".", t)
      }, i.visitValue = s, i.isDefined = function(e) {
          return null != e
      }, i.noUndefined = function(e) {
          return void 0 === e ? null : e
      };
      var l = function() {
          function e() {
              n(this, e)
          }
          return r(e, [{
              key: "visitArray",
              value: function(e, t) {
                  var n = this;
                  return e.map(function(e) {
                      return s(e, n, t)
                  })
              }
          }, {
              key: "visitStringMap",
              value: function(e, t) {
                  var n = this,
                      i = {};
                  return Object.keys(e).forEach(function(r) {
                      i[r] = s(e[r], n, t)
                  }), i
              }
          }, {
              key: "visitPrimitive",
              value: function(e, t) {
                  return e
              }
          }, {
              key: "visitOther",
              value: function(e, t) {
                  return e
              }
          }]), e
      }();
      i.ValueTransformer = l, i.SyncAsync = {
          assertSync: function(e) {
              if (p(e)) throw new Error("Illegal state: value cannot be a promise");
              return e
          },
          then: function(e, t) {
              return p(e) ? e.then(t) : t(e)
          },
          all: function(e) {
              return e.some(p) ? Promise.all(e) : e
          }
      }, i.error = function(e) {
          throw new Error("Internal Error: ".concat(e))
      }, i.syntaxError = function(e, t) {
          var n = Error(e);
          return n[c] = !0, t && (n[u] = t), n
      };
      var c = "ngSyntaxError",
          u = "ngParseErrors";
      i.isSyntaxError = function(e) {
          return e[c]
      }, i.getParseErrors = function(e) {
          return e[u] || []
      }, i.escapeRegExp = function(e) {
          return e.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1")
      };
      var h = Object.getPrototypeOf({});

      function p(e) {
          return !!e && "function" == typeof e.then
      }
      i.utf8Encode = function(e) {
          for (var t = "", n = 0; n < e.length; n++) {
              var i = e.charCodeAt(n);
              if (i >= 55296 && i <= 56319 && e.length > n + 1) {
                  var r = e.charCodeAt(n + 1);
                  r >= 56320 && r <= 57343 && (n++, i = (i - 55296 << 10) + r - 56320 + 65536)
              }
              i <= 127 ? t += String.fromCharCode(i) : i <= 2047 ? t += String.fromCharCode(i >> 6 & 31 | 192, 63 & i | 128) : i <= 65535 ? t += String.fromCharCode(i >> 12 | 224, i >> 6 & 63 | 128, 63 & i | 128) : i <= 2097151 && (t += String.fromCharCode(i >> 18 & 7 | 240, i >> 12 & 63 | 128, i >> 6 & 63 | 128, 63 & i | 128))
          }
          return t
      }, i.stringify = function e(t) {
          if ("string" == typeof t) return t;
          if (t instanceof Array) return "[" + t.map(e).join(", ") + "]";
          if (null == t) return "" + t;
          if (t.overriddenName) return "".concat(t.overriddenName);
          if (t.name) return "".concat(t.name);
          var n = t.toString();
          if (null == n) return "" + n;
          var i = n.indexOf("\n");
          return -1 === i ? n : n.substring(0, i)
      }, i.resolveForwardRef = function(e) {
          return "function" == typeof e && e.hasOwnProperty("__forward_ref__") ? e() : e
      }, i.isPromise = p;
      i.Version = function e(t) {
          n(this, e), this.full = t;
          var i = t.split(".");
          this.major = i[0], this.minor = i[1], this.patch = i.slice(2).join(".")
      }
  });
  Ge(Lt);
  Lt.dashCaseToCamelCase, Lt.splitAtColon, Lt.splitAtPeriod, Lt.visitValue, Lt.isDefined, Lt.noUndefined, Lt.ValueTransformer, Lt.SyncAsync, Lt.error, Lt.syntaxError, Lt.isSyntaxError, Lt.getParseErrors, Lt.escapeRegExp, Lt.utf8Encode, Lt.stringify, Lt.resolveForwardRef, Lt.isPromise, Lt.Version;
  var It = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;

      function a(e) {
          return e.replace(/\W/g, "_")
      }
      t.sanitizeIdentifier = a;
      var o, s = 0;

      function l(e) {
          if (!e || !e.reference) return null;
          var t = e.reference;
          if (t instanceof Mt.StaticSymbol) return t.name;
          if (t.__anonymousType) return t.__anonymousType;
          var n = Lt.stringify(t);
          return n.indexOf("(") >= 0 ? (n = "anonymous_".concat(s++), t.__anonymousType = n) : n = a(n), n
      }
      t.identifierName = l, t.identifierModuleUrl = function(e) {
              var t = e.reference;
              return t instanceof Mt.StaticSymbol ? t.filePath : "./".concat(Lt.stringify(t))
          }, t.viewClassName = function(e, t) {
              return "View_".concat(l({
                  reference: e
              }), "_").concat(t)
          }, t.rendererTypeName = function(e) {
              return "RenderType_".concat(l({
                  reference: e
              }))
          }, t.hostViewClassName = function(e) {
              return "HostView_".concat(l({
                  reference: e
              }))
          }, t.componentFactoryName = function(e) {
              return "".concat(l({
                  reference: e
              }), "NgFactory")
          },
          function(e) {
              e[e.Pipe = 0] = "Pipe", e[e.Directive = 1] = "Directive", e[e.NgModule = 2] = "NgModule", e[e.Injectable = 3] = "Injectable"
          }(o = t.CompileSummaryKind || (t.CompileSummaryKind = {})), t.tokenName = function(e) {
              return null != e.value ? a(e.value) : l(e.identifier)
          }, t.tokenReference = function(e) {
              return null != e.identifier ? e.identifier.reference : e.value
          };
      t.CompileStylesheetMetadata = function e() {
          var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
              i = t.moduleUrl,
              r = t.styles,
              a = t.styleUrls;
          n(this, e), this.moduleUrl = i || null, this.styles = f(r), this.styleUrls = f(a)
      };
      var c = function() {
          function e(t) {
              var i = t.encapsulation,
                  r = t.template,
                  a = t.templateUrl,
                  o = t.htmlAst,
                  s = t.styles,
                  l = t.styleUrls,
                  c = t.externalStylesheets,
                  u = t.animations,
                  h = t.ngContentSelectors,
                  p = t.interpolation,
                  d = t.isInline,
                  v = t.preserveWhitespaces;
              if (n(this, e), this.encapsulation = i, this.template = r, this.templateUrl = a, this.htmlAst = o, this.styles = f(s), this.styleUrls = f(l), this.externalStylesheets = f(c), this.animations = u ? m(u) : [], this.ngContentSelectors = h || [], p && 2 != p.length) throw new Error("'interpolation' should have a start and an end symbol.");
              this.interpolation = p, this.isInline = d, this.preserveWhitespaces = v
          }
          return r(e, [{
              key: "toSummary",
              value: function() {
                  return {
                      ngContentSelectors: this.ngContentSelectors,
                      encapsulation: this.encapsulation,
                      styles: this.styles,
                      animations: this.animations
                  }
              }
          }]), e
      }();
      t.CompileTemplateMetadata = c;
      var u = function() {
          function e(t) {
              var i = t.isHost,
                  r = t.type,
                  a = t.isComponent,
                  o = t.selector,
                  s = t.exportAs,
                  l = t.changeDetection,
                  c = t.inputs,
                  u = t.outputs,
                  h = t.hostListeners,
                  p = t.hostProperties,
                  d = t.hostAttributes,
                  m = t.providers,
                  v = t.viewProviders,
                  _ = t.queries,
                  g = t.guards,
                  y = t.viewQueries,
                  T = t.entryComponents,
                  S = t.template,
                  C = t.componentViewType,
                  k = t.rendererType,
                  E = t.componentFactory;
              n(this, e), this.isHost = !!i, this.type = r, this.isComponent = a, this.selector = o, this.exportAs = s, this.changeDetection = l, this.inputs = c, this.outputs = u, this.hostListeners = h, this.hostProperties = p, this.hostAttributes = d, this.providers = f(m), this.viewProviders = f(v), this.queries = f(_), this.guards = g, this.viewQueries = f(y), this.entryComponents = f(T), this.template = S, this.componentViewType = C, this.rendererType = k, this.componentFactory = E
          }
          return r(e, null, [{
              key: "create",
              value: function(t) {
                  var n = t.isHost,
                      r = t.type,
                      a = t.isComponent,
                      o = t.selector,
                      s = t.exportAs,
                      l = t.changeDetection,
                      c = t.inputs,
                      u = t.outputs,
                      h = t.host,
                      p = t.providers,
                      d = t.viewProviders,
                      f = t.queries,
                      m = t.guards,
                      v = t.viewQueries,
                      _ = t.entryComponents,
                      g = t.template,
                      y = t.componentViewType,
                      T = t.rendererType,
                      S = t.componentFactory,
                      C = {},
                      k = {},
                      E = {};
                  null != h && Object.keys(h).forEach(function(e) {
                      var t = h[e],
                          n = e.match(i);
                      null === n ? E[e] = t : null != n[1] ? k[n[1]] = t : null != n[2] && (C[n[2]] = t)
                  });
                  var A = {};
                  null != c && c.forEach(function(e) {
                      var t = Lt.splitAtColon(e, [e, e]);
                      A[t[0]] = t[1]
                  });
                  var b = {};
                  return null != u && u.forEach(function(e) {
                      var t = Lt.splitAtColon(e, [e, e]);
                      b[t[0]] = t[1]
                  }), new e({
                      isHost: n,
                      type: r,
                      isComponent: !!a,
                      selector: o,
                      exportAs: s,
                      changeDetection: l,
                      inputs: A,
                      outputs: b,
                      hostListeners: C,
                      hostProperties: k,
                      hostAttributes: E,
                      providers: p,
                      viewProviders: d,
                      queries: f,
                      guards: m,
                      viewQueries: v,
                      entryComponents: _,
                      template: g,
                      componentViewType: y,
                      rendererType: T,
                      componentFactory: S
                  })
              }
          }]), r(e, [{
              key: "toSummary",
              value: function() {
                  return {
                      summaryKind: o.Directive,
                      type: this.type,
                      isComponent: this.isComponent,
                      selector: this.selector,
                      exportAs: this.exportAs,
                      inputs: this.inputs,
                      outputs: this.outputs,
                      hostListeners: this.hostListeners,
                      hostProperties: this.hostProperties,
                      hostAttributes: this.hostAttributes,
                      providers: this.providers,
                      viewProviders: this.viewProviders,
                      queries: this.queries,
                      guards: this.guards,
                      viewQueries: this.viewQueries,
                      entryComponents: this.entryComponents,
                      changeDetection: this.changeDetection,
                      template: this.template && this.template.toSummary(),
                      componentViewType: this.componentViewType,
                      rendererType: this.rendererType,
                      componentFactory: this.componentFactory
                  }
              }
          }]), e
      }();
      t.CompileDirectiveMetadata = u;
      var h = function() {
          function e(t) {
              var i = t.type,
                  r = t.name,
                  a = t.pure;
              n(this, e), this.type = i, this.name = r, this.pure = !!a
          }
          return r(e, [{
              key: "toSummary",
              value: function() {
                  return {
                      summaryKind: o.Pipe,
                      type: this.type,
                      name: this.name,
                      pure: this.pure
                  }
              }
          }]), e
      }();
      t.CompilePipeMetadata = h;
      t.CompileShallowModuleMetadata = function e() {
          n(this, e)
      };
      var p = function() {
          function e(t) {
              var i = t.type,
                  r = t.providers,
                  a = t.declaredDirectives,
                  o = t.exportedDirectives,
                  s = t.declaredPipes,
                  l = t.exportedPipes,
                  c = t.entryComponents,
                  u = t.bootstrapComponents,
                  h = t.importedModules,
                  p = t.exportedModules,
                  d = t.schemas,
                  m = t.transitiveModule,
                  v = t.id;
              n(this, e), this.type = i || null, this.declaredDirectives = f(a), this.exportedDirectives = f(o), this.declaredPipes = f(s), this.exportedPipes = f(l), this.providers = f(r), this.entryComponents = f(c), this.bootstrapComponents = f(u), this.importedModules = f(h), this.exportedModules = f(p), this.schemas = f(d), this.id = v || null, this.transitiveModule = m || null
          }
          return r(e, [{
              key: "toSummary",
              value: function() {
                  var e = this.transitiveModule;
                  return {
                      summaryKind: o.NgModule,
                      type: this.type,
                      entryComponents: e.entryComponents,
                      providers: e.providers,
                      modules: e.modules,
                      exportedDirectives: e.exportedDirectives,
                      exportedPipes: e.exportedPipes
                  }
              }
          }]), e
      }();
      t.CompileNgModuleMetadata = p;
      var d = function() {
          function e() {
              n(this, e), this.directivesSet = new Set, this.directives = [], this.exportedDirectivesSet = new Set, this.exportedDirectives = [], this.pipesSet = new Set, this.pipes = [], this.exportedPipesSet = new Set, this.exportedPipes = [], this.modulesSet = new Set, this.modules = [], this.entryComponentsSet = new Set, this.entryComponents = [], this.providers = []
          }
          return r(e, [{
              key: "addProvider",
              value: function(e, t) {
                  this.providers.push({
                      provider: e,
                      module: t
                  })
              }
          }, {
              key: "addDirective",
              value: function(e) {
                  this.directivesSet.has(e.reference) || (this.directivesSet.add(e.reference), this.directives.push(e))
              }
          }, {
              key: "addExportedDirective",
              value: function(e) {
                  this.exportedDirectivesSet.has(e.reference) || (this.exportedDirectivesSet.add(e.reference), this.exportedDirectives.push(e))
              }
          }, {
              key: "addPipe",
              value: function(e) {
                  this.pipesSet.has(e.reference) || (this.pipesSet.add(e.reference), this.pipes.push(e))
              }
          }, {
              key: "addExportedPipe",
              value: function(e) {
                  this.exportedPipesSet.has(e.reference) || (this.exportedPipesSet.add(e.reference), this.exportedPipes.push(e))
              }
          }, {
              key: "addModule",
              value: function(e) {
                  this.modulesSet.has(e.reference) || (this.modulesSet.add(e.reference), this.modules.push(e))
              }
          }, {
              key: "addEntryComponent",
              value: function(e) {
                  this.entryComponentsSet.has(e.componentType) || (this.entryComponentsSet.add(e.componentType), this.entryComponents.push(e))
              }
          }]), e
      }();

      function f(e) {
          return e || []
      }
      t.TransitiveCompileNgModuleMetadata = d;

      function m(e) {
          return e.reduce(function(e, t) {
              var n = Array.isArray(t) ? m(t) : t;
              return e.concat(n)
          }, [])
      }

      function v(e) {
          return e.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///")
      }
      t.ProviderMeta = function e(t, i) {
          var r = i.useClass,
              a = i.useValue,
              o = i.useExisting,
              s = i.useFactory,
              l = i.deps,
              c = i.multi;
          n(this, e), this.token = t, this.useClass = r || null, this.useValue = a, this.useExisting = o, this.useFactory = s || null, this.dependencies = l || null, this.multi = !!c
      }, t.flatten = m, t.templateSourceUrl = function(e, t, n) {
          var i;
          return i = n.isInline ? t.type.reference instanceof Mt.StaticSymbol ? "".concat(t.type.reference.filePath, ".").concat(t.type.reference.name, ".html") : "".concat(l(e), "/").concat(l(t.type), ".html") : n.templateUrl, t.type.reference instanceof Mt.StaticSymbol ? i : v(i)
      }, t.sharedStylesheetJitUrl = function(e, t) {
          var n = e.moduleUrl.split(/\/\\/g),
              i = n[n.length - 1];
          return v("css/".concat(t).concat(i, ".ngstyle.js"))
      }, t.ngModuleJitUrl = function(e) {
          return v("".concat(l(e.type), "/module.ngfactory.js"))
      }, t.templateJitUrl = function(e, t) {
          return v("".concat(l(e), "/").concat(l(t.type), ".ngfactory.js"))
      }
  });
  Ge(It);
  It.sanitizeIdentifier, It.identifierName, It.identifierModuleUrl, It.viewClassName, It.rendererTypeName, It.hostViewClassName, It.componentFactoryName, It.CompileSummaryKind, It.tokenName, It.tokenReference, It.CompileStylesheetMetadata, It.CompileTemplateMetadata, It.CompileDirectiveMetadata, It.CompilePipeMetadata, It.CompileShallowModuleMetadata, It.CompileNgModuleMetadata, It.TransitiveCompileNgModuleMetadata, It.ProviderMeta, It.flatten, It.templateSourceUrl, It.sharedStylesheetJitUrl, It.ngModuleJitUrl, It.templateJitUrl;
  var Ft = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function() {
          function e(t, i, r, a) {
              n(this, e), this.file = t, this.offset = i, this.line = r, this.col = a
          }
          return r(e, [{
              key: "toString",
              value: function() {
                  return null != this.offset ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url
              }
          }, {
              key: "moveBy",
              value: function(t) {
                  for (var n = this.file.content, i = n.length, r = this.offset, a = this.line, o = this.col; r > 0 && t < 0;) {
                      if (r--, t++, n.charCodeAt(r) == Dt.$LF) {
                          a--;
                          var s = n.substr(0, r - 1).lastIndexOf(String.fromCharCode(Dt.$LF));
                          o = s > 0 ? r - s : r
                      } else o--
                  }
                  for (; r < i && t > 0;) {
                      var l = n.charCodeAt(r);
                      r++, t--, l == Dt.$LF ? (a++, o = 0) : o++
                  }
                  return new e(this.file, r, a, o)
              }
          }, {
              key: "getContext",
              value: function(e, t) {
                  var n = this.file.content,
                      i = this.offset;
                  if (null != i) {
                      i > n.length - 1 && (i = n.length - 1);
                      for (var r = i, a = 0, o = 0; a < e && i > 0 && (a++, "\n" != n[--i] || ++o != t););
                      for (a = 0, o = 0; a < e && r < n.length - 1 && (a++, "\n" != n[++r] || ++o != t););
                      return {
                          before: n.substring(i, this.offset),
                          after: n.substring(this.offset, r + 1)
                      }
                  }
                  return null
              }
          }]), e
      }();
      t.ParseLocation = i;
      var a = function e(t, i) {
          n(this, e), this.content = t, this.url = i
      };
      t.ParseSourceFile = a;
      var o, s = function() {
          function e(t, i) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
              n(this, e), this.start = t, this.end = i, this.details = r
          }
          return r(e, [{
              key: "toString",
              value: function() {
                  return this.start.file.content.substring(this.start.offset, this.end.offset)
              }
          }]), e
      }();
      t.ParseSourceSpan = s,
          function(e) {
              e[e.WARNING = 0] = "WARNING", e[e.ERROR = 1] = "ERROR"
          }(o = t.ParseErrorLevel || (t.ParseErrorLevel = {}));
      var l = function() {
          function e(t, i) {
              var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : o.ERROR;
              n(this, e), this.span = t, this.msg = i, this.level = r
          }
          return r(e, [{
              key: "contextualMessage",
              value: function() {
                  var e = this.span.start.getContext(100, 3);
                  return e ? "".concat(this.msg, ' ("').concat(e.before, "[").concat(o[this.level], " ->]").concat(e.after, '")') : this.msg
              }
          }, {
              key: "toString",
              value: function() {
                  var e = this.span.details ? ", ".concat(this.span.details) : "";
                  return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e)
              }
          }]), e
      }();
      t.ParseError = l, t.typeSourceSpan = function(e, t) {
          var n = It.identifierModuleUrl(t),
              r = null != n ? "in ".concat(e, " ").concat(It.identifierName(t), " in ").concat(n) : "in ".concat(e, " ").concat(It.identifierName(t)),
              o = new a("", r);
          return new s(new i(o, -1, -1, -1), new i(o, -1, -1, -1))
      }
  });
  Ge(Ft);
  Ft.ParseLocation, Ft.ParseSourceFile, Ft.ParseSourceSpan, Ft.ParseErrorLevel, Ft.ParseError, Ft.typeSourceSpan;
  var Bt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function() {
          function e(t) {
              var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
              n(this, e), this.path = t, this.position = i
          }
          return r(e, [{
              key: "parentOf",
              value: function(e) {
                  return e && this.path[this.path.indexOf(e) - 1]
              }
          }, {
              key: "childOf",
              value: function(e) {
                  return this.path[this.path.indexOf(e) + 1]
              }
          }, {
              key: "first",
              value: function(e) {
                  for (var t = this.path.length - 1; t >= 0; t--) {
                      var n = this.path[t];
                      if (n instanceof e) return n
                  }
              }
          }, {
              key: "push",
              value: function(e) {
                  this.path.push(e)
              }
          }, {
              key: "pop",
              value: function() {
                  return this.path.pop()
              }
          }, {
              key: "empty",
              get: function() {
                  return !this.path || !this.path.length
              }
          }, {
              key: "head",
              get: function() {
                  return this.path[0]
              }
          }, {
              key: "tail",
              get: function() {
                  return this.path[this.path.length - 1]
              }
          }]), e
      }();
      t.AstPath = i
  });
  Ge(Bt);
  Bt.AstPath;
  var Ut = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function() {
          function e(t, i) {
              n(this, e), this.value = t, this.sourceSpan = i
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitText(this, t)
              }
          }]), e
      }();
      t.Text = i;
      var s = function() {
          function e(t, i) {
              n(this, e), this.value = t, this.sourceSpan = i
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitCdata(this, t)
              }
          }]), e
      }();
      t.CDATA = s;
      var c = function() {
          function e(t, i, r, a, o) {
              n(this, e), this.switchValue = t, this.type = i, this.cases = r, this.sourceSpan = a, this.switchValueSourceSpan = o
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitExpansion(this, t)
              }
          }]), e
      }();
      t.Expansion = c;
      var u = function() {
          function e(t, i, r, a, o) {
              n(this, e), this.value = t, this.expression = i, this.sourceSpan = r, this.valueSourceSpan = a, this.expSourceSpan = o
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitExpansionCase(this, t)
              }
          }]), e
      }();
      t.ExpansionCase = u;
      var h = function() {
          function e(t, i, r) {
              var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : null,
                  o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null;
              n(this, e), this.name = t, this.value = i, this.sourceSpan = r, this.valueSpan = a, this.nameSpan = o
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitAttribute(this, t)
              }
          }]), e
      }();
      t.Attribute = h;
      var p = function() {
          function e(t, i, r, a) {
              var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : null,
                  s = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : null,
                  l = arguments.length > 6 && void 0 !== arguments[6] ? arguments[6] : null;
              n(this, e), this.name = t, this.attrs = i, this.children = r, this.sourceSpan = a, this.startSourceSpan = o, this.endSourceSpan = s, this.nameSpan = l
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitElement(this, t)
              }
          }]), e
      }();
      t.Element = p;
      var d = function() {
          function e(t, i) {
              n(this, e), this.value = t, this.sourceSpan = i
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitComment(this, t)
              }
          }]), e
      }();
      t.Comment = d;
      var f = function() {
          function e(t, i) {
              n(this, e), this.value = t, this.sourceSpan = i
          }
          return r(e, [{
              key: "visit",
              value: function(e, t) {
                  return e.visitDocType(this, t)
              }
          }]), e
      }();

      function m(e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
              i = [],
              r = e.visit ? function(t) {
                  return e.visit(t, n) || t.visit(e, n)
              } : function(t) {
                  return t.visit(e, n)
              };
          return t.forEach(function(e) {
              var t = r(e);
              t && i.push(t)
          }), i
      }
      t.DocType = f, t.visitAll = m;
      var v = function() {
          function e() {
              n(this, e)
          }
          return r(e, [{
              key: "visitElement",
              value: function(e, t) {
                  this.visitChildren(t, function(t) {
                      t(e.attrs), t(e.children)
                  })
              }
          }, {
              key: "visitAttribute",
              value: function(e, t) {}
          }, {
              key: "visitText",
              value: function(e, t) {}
          }, {
              key: "visitCdata",
              value: function(e, t) {}
          }, {
              key: "visitComment",
              value: function(e, t) {}
          }, {
              key: "visitDocType",
              value: function(e, t) {}
          }, {
              key: "visitExpansion",
              value: function(e, t) {
                  return this.visitChildren(t, function(t) {
                      t(e.cases)
                  })
              }
          }, {
              key: "visitExpansionCase",
              value: function(e, t) {}
          }, {
              key: "visitChildren",
              value: function(e, t) {
                  var n = [],
                      i = this;
                  return t(function(t) {
                      t && n.push(m(i, t, e))
                  }), [].concat.apply([], n)
              }
          }]), e
      }();
      t.RecursiveVisitor = v, t.findNode = function(e, t) {
          var i = [];
          return m(new(function(e) {
              function s() {
                  return n(this, s), l(this, o(s).apply(this, arguments))
              }
              return a(s, v), r(s, [{
                  key: "visit",
                  value: function(e, n) {
                      var r = function e(t) {
                          var n = t.sourceSpan.start.offset,
                              i = t.sourceSpan.end.offset;
                          return t instanceof p && (t.endSourceSpan ? i = t.endSourceSpan.end.offset : t.children && t.children.length && (i = e(t.children[t.children.length - 1]).end)), {
                              start: n,
                              end: i
                          }
                      }(e);
                      if (!(r.start <= t && t < r.end)) return !0;
                      i.push(e)
                  }
              }]), s
          }()), e), new Bt.AstPath(i, t)
      }
  });
  Ge(Ut);
  Ut.Text, Ut.CDATA, Ut.Expansion, Ut.ExpansionCase, Ut.Attribute, Ut.Element, Ut.Comment, Ut.DocType, Ut.visitAll, Ut.RecursiveVisitor, Ut.findNode;
  var Xt = We(function(e, t) {
      var i;
      Object.defineProperty(t, "__esModule", {
              value: !0
          }),
          function(e) {
              e[e.TAG_OPEN_START = 0] = "TAG_OPEN_START", e[e.TAG_OPEN_END = 1] = "TAG_OPEN_END", e[e.TAG_OPEN_END_VOID = 2] = "TAG_OPEN_END_VOID", e[e.TAG_CLOSE = 3] = "TAG_CLOSE", e[e.TEXT = 4] = "TEXT", e[e.ESCAPABLE_RAW_TEXT = 5] = "ESCAPABLE_RAW_TEXT", e[e.RAW_TEXT = 6] = "RAW_TEXT", e[e.COMMENT_START = 7] = "COMMENT_START", e[e.COMMENT_END = 8] = "COMMENT_END", e[e.CDATA_START = 9] = "CDATA_START", e[e.CDATA_END = 10] = "CDATA_END", e[e.ATTR_NAME = 11] = "ATTR_NAME", e[e.ATTR_VALUE = 12] = "ATTR_VALUE", e[e.DOC_TYPE_START = 13] = "DOC_TYPE_START", e[e.DOC_TYPE_END = 14] = "DOC_TYPE_END", e[e.EXPANSION_FORM_START = 15] = "EXPANSION_FORM_START", e[e.EXPANSION_CASE_VALUE = 16] = "EXPANSION_CASE_VALUE", e[e.EXPANSION_CASE_EXP_START = 17] = "EXPANSION_CASE_EXP_START", e[e.EXPANSION_CASE_EXP_END = 18] = "EXPANSION_CASE_EXP_END", e[e.EXPANSION_FORM_END = 19] = "EXPANSION_FORM_END", e[e.EOF = 20] = "EOF"
          }(i = t.TokenType || (t.TokenType = {}));
      var s = function e(t, i, r) {
          n(this, e), this.type = t, this.parts = i, this.sourceSpan = r
      };
      t.Token = s;
      var c = function(e) {
          function t(e, i, r) {
              var a;
              return n(this, t), (a = l(this, o(t).call(this, r, e))).tokenType = i, a
          }
          return a(t, Ft.ParseError), t
      }();
      t.TokenError = c;
      var u = function e(t, i) {
          n(this, e), this.tokens = t, this.errors = i
      };
      t.TokenizeResult = u, t.tokenize = function(e, t, n) {
          var i = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
              r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : Rt.DEFAULT_INTERPOLATION_CONFIG,
              a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
              o = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
          return new m(new Ft.ParseSourceFile(e, t), n, i, r, a, o).tokenize()
      };
      var h = /\r\n?/g;

      function p(e) {
          var t = e === Dt.$EOF ? "EOF" : String.fromCharCode(e);
          return 'Unexpected character "'.concat(t, '"')
      }

      function d(e) {
          return 'Unknown entity "'.concat(e, '" - use the "&#<decimal>;" or  "&#x<hex>;" syntax')
      }
      var f = function e(t) {
              n(this, e), this.error = t
          },
          m = function() {
              function e(t, i, r) {
                  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rt.DEFAULT_INTERPOLATION_CONFIG,
                      o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                      s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                  n(this, e), this._file = t, this._getTagDefinition = i, this._tokenizeIcu = r, this._interpolationConfig = a, this.canSelfClose = o, this.allowHtmComponentClosingTags = s, this._peek = -1, this._nextPeek = -1, this._index = -1, this._line = 0, this._column = -1, this._expansionCaseStack = [], this._inInterpolation = !1, this.tokens = [], this.errors = [], this._input = t.content, this._length = t.content.length, this._advance()
              }
              return r(e, [{
                  key: "_processCarriageReturns",
                  value: function(e) {
                      return e.replace(h, "\n")
                  }
              }, {
                  key: "tokenize",
                  value: function() {
                      for (; this._peek !== Dt.$EOF;) {
                          var e = this._getLocation();
                          try {
                              if (this._attemptCharCode(Dt.$LT))
                                  if (this._attemptCharCode(Dt.$BANG)) this._attemptStr("[CDATA[") ? this._consumeCdata(e) : this._attemptStr("--") ? this._consumeComment(e) : this._attemptStrCaseInsensitive("doctype") ? this._consumeDocType(e) : this._consumeBogusComment(e);
                                  else if (this._attemptCharCode(Dt.$SLASH)) this._consumeTagClose(e);
                              else {
                                  var t = this._savePosition();
                                  this._attemptCharCode(Dt.$QUESTION) ? (this._restorePosition(t), this._consumeBogusComment(e)) : this._consumeTagOpen(e)
                              } else this._tokenizeIcu && this._tokenizeExpansionForm() || this._consumeText()
                          } catch (e) {
                              if (!(e instanceof f)) throw e;
                              this.errors.push(e.error)
                          }
                      }
                      return this._beginToken(i.EOF), this._endToken([]), new u(function(e) {
                          for (var t = [], n = void 0, r = 0; r < e.length; r++) {
                              var a = e[r];
                              n && n.type == i.TEXT && a.type == i.TEXT ? (n.parts[0] += a.parts[0], n.sourceSpan.end = a.sourceSpan.end) : (n = a, t.push(n))
                          }
                          return t
                      }(this.tokens), this.errors)
                  }
              }, {
                  key: "_tokenizeExpansionForm",
                  value: function() {
                      if (T(this._input, this._index, this._interpolationConfig)) return this._consumeExpansionFormStart(), !0;
                      if (((e = this._peek) === Dt.$EQ || Dt.isAsciiLetter(e) || Dt.isDigit(e)) && this._isInExpansionForm()) return this._consumeExpansionCaseStart(), !0;
                      var e;
                      if (this._peek === Dt.$RBRACE) {
                          if (this._isInExpansionCase()) return this._consumeExpansionCaseEnd(), !0;
                          if (this._isInExpansionForm()) return this._consumeExpansionFormEnd(), !0
                      }
                      return !1
                  }
              }, {
                  key: "_getLocation",
                  value: function() {
                      return new Ft.ParseLocation(this._file, this._index, this._line, this._column)
                  }
              }, {
                  key: "_getSpan",
                  value: function() {
                      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this._getLocation(),
                          t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getLocation();
                      return new Ft.ParseSourceSpan(e, t)
                  }
              }, {
                  key: "_beginToken",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getLocation();
                      this._currentTokenStart = t, this._currentTokenType = e
                  }
              }, {
                  key: "_endToken",
                  value: function(e) {
                      var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : this._getLocation(),
                          n = new s(this._currentTokenType, e, new Ft.ParseSourceSpan(this._currentTokenStart, t));
                      return this.tokens.push(n), this._currentTokenStart = null, this._currentTokenType = null, n
                  }
              }, {
                  key: "_createError",
                  value: function(e, t) {
                      this._isInExpansionForm() && (e += ' (Do you have an unescaped "{" in your template? Use "{{ \'{\' }}") to escape it.)');
                      var n = new c(e, this._currentTokenType, t);
                      return this._currentTokenStart = null, this._currentTokenType = null, new f(n)
                  }
              }, {
                  key: "_advance",
                  value: function() {
                      if (this._index >= this._length) throw this._createError(p(Dt.$EOF), this._getSpan());
                      this._peek === Dt.$LF ? (this._line++, this._column = 0) : this._peek !== Dt.$LF && this._peek !== Dt.$CR && this._column++, this._index++, this._peek = this._index >= this._length ? Dt.$EOF : this._input.charCodeAt(this._index), this._nextPeek = this._index + 1 >= this._length ? Dt.$EOF : this._input.charCodeAt(this._index + 1)
                  }
              }, {
                  key: "_attemptCharCode",
                  value: function(e) {
                      return this._peek === e && (this._advance(), !0)
                  }
              }, {
                  key: "_attemptCharCodeCaseInsensitive",
                  value: function(e) {
                      return t = this._peek, n = e, S(t) == S(n) && (this._advance(), !0);
                      var t, n
                  }
              }, {
                  key: "_requireCharCode",
                  value: function(e) {
                      var t = this._getLocation();
                      if (!this._attemptCharCode(e)) throw this._createError(p(this._peek), this._getSpan(t, t))
                  }
              }, {
                  key: "_attemptStr",
                  value: function(e) {
                      var t = e.length;
                      if (this._index + t > this._length) return !1;
                      for (var n = this._savePosition(), i = 0; i < t; i++)
                          if (!this._attemptCharCode(e.charCodeAt(i))) return this._restorePosition(n), !1;
                      return !0
                  }
              }, {
                  key: "_attemptStrCaseInsensitive",
                  value: function(e) {
                      for (var t = 0; t < e.length; t++)
                          if (!this._attemptCharCodeCaseInsensitive(e.charCodeAt(t))) return !1;
                      return !0
                  }
              }, {
                  key: "_requireStr",
                  value: function(e) {
                      var t = this._getLocation();
                      if (!this._attemptStr(e)) throw this._createError(p(this._peek), this._getSpan(t))
                  }
              }, {
                  key: "_requireStrCaseInsensitive",
                  value: function(e) {
                      var t = this._getLocation();
                      if (!this._attemptStrCaseInsensitive(e)) throw this._createError(p(this._peek), this._getSpan(t))
                  }
              }, {
                  key: "_attemptCharCodeUntilFn",
                  value: function(e) {
                      for (; !e(this._peek);) this._advance()
                  }
              }, {
                  key: "_requireCharCodeUntilFn",
                  value: function(e, t) {
                      var n = this._getLocation();
                      if (this._attemptCharCodeUntilFn(e), this._index - n.offset < t) throw this._createError(p(this._peek), this._getSpan(n, n))
                  }
              }, {
                  key: "_attemptUntilChar",
                  value: function(e) {
                      for (; this._peek !== e;) this._advance()
                  }
              }, {
                  key: "_readChar",
                  value: function(e) {
                      if (e && this._peek === Dt.$AMPERSAND) return this._decodeEntity();
                      var t = this._index;
                      return this._advance(), this._input[t]
                  }
              }, {
                  key: "_decodeEntity",
                  value: function() {
                      var e = this._getLocation();
                      if (this._advance(), !this._attemptCharCode(Dt.$HASH)) {
                          var t = this._savePosition();
                          if (this._attemptCharCodeUntilFn(y), this._peek != Dt.$SEMICOLON) return this._restorePosition(t), "&";
                          this._advance();
                          var n = this._input.substring(e.offset + 1, this._index - 1),
                              i = wt.NAMED_ENTITIES[n];
                          if (!i) throw this._createError(d(n), this._getSpan(e));
                          return i
                      }
                      var r = this._attemptCharCode(Dt.$x) || this._attemptCharCode(Dt.$X),
                          a = this._getLocation().offset;
                      if (this._attemptCharCodeUntilFn(g), this._peek != Dt.$SEMICOLON) throw this._createError(p(this._peek), this._getSpan());
                      this._advance();
                      var o = this._input.substring(a, this._index - 1);
                      try {
                          var s = parseInt(o, r ? 16 : 10);
                          return String.fromCharCode(s)
                      } catch (t) {
                          var l = this._input.substring(e.offset + 1, this._index - 1);
                          throw this._createError(d(l), this._getSpan(e))
                      }
                  }
              }, {
                  key: "_consumeRawText",
                  value: function(e, t, n) {
                      var r, a = this._getLocation();
                      this._beginToken(e ? i.ESCAPABLE_RAW_TEXT : i.RAW_TEXT, a);
                      for (var o = []; r = this._getLocation(), !this._attemptCharCode(t) || !n();)
                          for (this._index > r.offset && o.push(this._input.substring(r.offset, this._index)); this._peek !== t;) o.push(this._readChar(e));
                      return this._endToken([this._processCarriageReturns(o.join(""))], r)
                  }
              }, {
                  key: "_consumeComment",
                  value: function(e) {
                      var t = this;
                      this._beginToken(i.COMMENT_START, e), this._endToken([]);
                      var n = this._consumeRawText(!1, Dt.$MINUS, function() {
                          return t._attemptStr("->")
                      });
                      this._beginToken(i.COMMENT_END, n.sourceSpan.end), this._endToken([])
                  }
              }, {
                  key: "_consumeBogusComment",
                  value: function(e) {
                      this._beginToken(i.COMMENT_START, e), this._endToken([]);
                      var t = this._consumeRawText(!1, Dt.$GT, function() {
                          return !0
                      });
                      this._beginToken(i.COMMENT_END, t.sourceSpan.end), this._endToken([])
                  }
              }, {
                  key: "_consumeCdata",
                  value: function(e) {
                      var t = this;
                      this._beginToken(i.CDATA_START, e), this._endToken([]);
                      var n = this._consumeRawText(!1, Dt.$RBRACKET, function() {
                          return t._attemptStr("]>")
                      });
                      this._beginToken(i.CDATA_END, n.sourceSpan.end), this._endToken([])
                  }
              }, {
                  key: "_consumeDocType",
                  value: function(e) {
                      this._beginToken(i.DOC_TYPE_START, e), this._endToken([]);
                      var t = this._consumeRawText(!1, Dt.$GT, function() {
                          return !0
                      });
                      this._beginToken(i.DOC_TYPE_END, t.sourceSpan.end), this._endToken([])
                  }
              }, {
                  key: "_consumePrefixAndName",
                  value: function() {
                      for (var e, t, n = this._index, i = null; this._peek !== Dt.$COLON && !(((e = this._peek) < Dt.$a || Dt.$z < e) && (e < Dt.$A || Dt.$Z < e) && (e < Dt.$0 || e > Dt.$9));) this._advance();
                      return this._peek === Dt.$COLON ? (this._advance(), i = this._input.substring(n, this._index - 1), t = this._index) : t = n, this._requireCharCodeUntilFn(_, this._index === t ? 1 : 0), [i, this._input.substring(t, this._index)]
                  }
              }, {
                  key: "_consumeTagOpen",
                  value: function(e) {
                      var t, n, r = this._savePosition();
                      try {
                          if (!Dt.isAsciiLetter(this._peek)) throw this._createError(p(this._peek), this._getSpan());
                          var a = this._index;
                          for (this._consumeTagOpenStart(e), n = (t = this._input.substring(a, this._index)).toLowerCase(), this._attemptCharCodeUntilFn(v); this._peek !== Dt.$SLASH && this._peek !== Dt.$GT;) this._consumeAttributeName(), this._attemptCharCodeUntilFn(v), this._attemptCharCode(Dt.$EQ) && (this._attemptCharCodeUntilFn(v), this._consumeAttributeValue()), this._attemptCharCodeUntilFn(v);
                          this._consumeTagOpenEnd()
                      } catch (t) {
                          if (t instanceof f) return this._restorePosition(r), this._beginToken(i.TEXT, e), void this._endToken(["<"]);
                          throw t
                      }
                      if (!this.canSelfClose || this.tokens[this.tokens.length - 1].type !== i.TAG_OPEN_END_VOID) {
                          var o = this._getTagDefinition(t).contentType;
                          o === wt.TagContentType.RAW_TEXT ? this._consumeRawTextWithTagClose(n, !1) : o === wt.TagContentType.ESCAPABLE_RAW_TEXT && this._consumeRawTextWithTagClose(n, !0)
                      }
                  }
              }, {
                  key: "_consumeRawTextWithTagClose",
                  value: function(e, t) {
                      var n = this,
                          r = this._consumeRawText(t, Dt.$LT, function() {
                              return !!n._attemptCharCode(Dt.$SLASH) && (n._attemptCharCodeUntilFn(v), !!n._attemptStrCaseInsensitive(e) && (n._attemptCharCodeUntilFn(v), n._attemptCharCode(Dt.$GT)))
                          });
                      this._beginToken(i.TAG_CLOSE, r.sourceSpan.end), this._endToken([null, e])
                  }
              }, {
                  key: "_consumeTagOpenStart",
                  value: function(e) {
                      this._beginToken(i.TAG_OPEN_START, e);
                      var t = this._consumePrefixAndName();
                      this._endToken(t)
                  }
              }, {
                  key: "_consumeAttributeName",
                  value: function() {
                      this._beginToken(i.ATTR_NAME);
                      var e = this._consumePrefixAndName();
                      this._endToken(e)
                  }
              }, {
                  key: "_consumeAttributeValue",
                  value: function() {
                      var e;
                      if (this._beginToken(i.ATTR_VALUE), this._peek === Dt.$SQ || this._peek === Dt.$DQ) {
                          var t = this._peek;
                          this._advance();
                          for (var n = []; this._peek !== t;) n.push(this._readChar(!0));
                          e = n.join(""), this._advance()
                      } else {
                          var r = this._index;
                          this._requireCharCodeUntilFn(_, 1), e = this._input.substring(r, this._index)
                      }
                      this._endToken([this._processCarriageReturns(e)])
                  }
              }, {
                  key: "_consumeTagOpenEnd",
                  value: function() {
                      var e = this._attemptCharCode(Dt.$SLASH) ? i.TAG_OPEN_END_VOID : i.TAG_OPEN_END;
                      this._beginToken(e), this._requireCharCode(Dt.$GT), this._endToken([])
                  }
              }, {
                  key: "_consumeTagClose",
                  value: function(e) {
                      if (this._beginToken(i.TAG_CLOSE, e), this._attemptCharCodeUntilFn(v), this.allowHtmComponentClosingTags && this._attemptCharCode(Dt.$SLASH)) this._attemptCharCodeUntilFn(v), this._requireCharCode(Dt.$GT), this._endToken([]);
                      else {
                          var t = this._consumePrefixAndName();
                          this._attemptCharCodeUntilFn(v), this._requireCharCode(Dt.$GT), this._endToken(t)
                      }
                  }
              }, {
                  key: "_consumeExpansionFormStart",
                  value: function() {
                      this._beginToken(i.EXPANSION_FORM_START, this._getLocation()), this._requireCharCode(Dt.$LBRACE), this._endToken([]), this._expansionCaseStack.push(i.EXPANSION_FORM_START), this._beginToken(i.RAW_TEXT, this._getLocation());
                      var e = this._readUntil(Dt.$COMMA);
                      this._endToken([e], this._getLocation()), this._requireCharCode(Dt.$COMMA), this._attemptCharCodeUntilFn(v), this._beginToken(i.RAW_TEXT, this._getLocation());
                      var t = this._readUntil(Dt.$COMMA);
                      this._endToken([t], this._getLocation()), this._requireCharCode(Dt.$COMMA), this._attemptCharCodeUntilFn(v)
                  }
              }, {
                  key: "_consumeExpansionCaseStart",
                  value: function() {
                      this._beginToken(i.EXPANSION_CASE_VALUE, this._getLocation());
                      var e = this._readUntil(Dt.$LBRACE).trim();
                      this._endToken([e], this._getLocation()), this._attemptCharCodeUntilFn(v), this._beginToken(i.EXPANSION_CASE_EXP_START, this._getLocation()), this._requireCharCode(Dt.$LBRACE), this._endToken([], this._getLocation()), this._attemptCharCodeUntilFn(v), this._expansionCaseStack.push(i.EXPANSION_CASE_EXP_START)
                  }
              }, {
                  key: "_consumeExpansionCaseEnd",
                  value: function() {
                      this._beginToken(i.EXPANSION_CASE_EXP_END, this._getLocation()), this._requireCharCode(Dt.$RBRACE), this._endToken([], this._getLocation()), this._attemptCharCodeUntilFn(v), this._expansionCaseStack.pop()
                  }
              }, {
                  key: "_consumeExpansionFormEnd",
                  value: function() {
                      this._beginToken(i.EXPANSION_FORM_END, this._getLocation()), this._requireCharCode(Dt.$RBRACE), this._endToken([]), this._expansionCaseStack.pop()
                  }
              }, {
                  key: "_consumeText",
                  value: function() {
                      var e = this._getLocation();
                      this._beginToken(i.TEXT, e);
                      var t = [];
                      do {
                          this._interpolationConfig && this._attemptStr(this._interpolationConfig.start) ? (t.push(this._interpolationConfig.start), this._inInterpolation = !0) : this._interpolationConfig && this._inInterpolation && this._attemptStr(this._interpolationConfig.end) ? (t.push(this._interpolationConfig.end), this._inInterpolation = !1) : t.push(this._readChar(!0))
                      } while (!this._isTextEnd());
                      this._endToken([this._processCarriageReturns(t.join(""))])
                  }
              }, {
                  key: "_isTextEnd",
                  value: function() {
                      if (this._peek === Dt.$LT || this._peek === Dt.$EOF) return !0;
                      if (this._tokenizeIcu && !this._inInterpolation) {
                          if (T(this._input, this._index, this._interpolationConfig)) return !0;
                          if (this._peek === Dt.$RBRACE && this._isInExpansionCase()) return !0
                      }
                      return !1
                  }
              }, {
                  key: "_savePosition",
                  value: function() {
                      return [this._peek, this._index, this._column, this._line, this.tokens.length]
                  }
              }, {
                  key: "_readUntil",
                  value: function(e) {
                      var t = this._index;
                      return this._attemptUntilChar(e), this._input.substring(t, this._index)
                  }
              }, {
                  key: "_restorePosition",
                  value: function(e) {
                      this._peek = e[0], this._index = e[1], this._column = e[2], this._line = e[3];
                      var t = e[4];
                      t < this.tokens.length && (this.tokens = this.tokens.slice(0, t))
                  }
              }, {
                  key: "_isInExpansionCase",
                  value: function() {
                      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === i.EXPANSION_CASE_EXP_START
                  }
              }, {
                  key: "_isInExpansionForm",
                  value: function() {
                      return this._expansionCaseStack.length > 0 && this._expansionCaseStack[this._expansionCaseStack.length - 1] === i.EXPANSION_FORM_START
                  }
              }]), e
          }();

      function v(e) {
          return !Dt.isWhitespace(e) || e === Dt.$EOF
      }

      function _(e) {
          return Dt.isWhitespace(e) || e === Dt.$GT || e === Dt.$SLASH || e === Dt.$SQ || e === Dt.$DQ || e === Dt.$EQ
      }

      function g(e) {
          return e == Dt.$SEMICOLON || e == Dt.$EOF || !Dt.isAsciiHexDigit(e)
      }

      function y(e) {
          return e == Dt.$SEMICOLON || e == Dt.$EOF || !Dt.isAsciiLetter(e)
      }

      function T(e, t, n) {
          var i = !!n && e.indexOf(n.start, t) == t;
          return e.charCodeAt(t) == Dt.$LBRACE && !i
      }

      function S(e) {
          return e >= Dt.$a && e <= Dt.$z ? e - Dt.$a + Dt.$A : e
      }
  });
  Ge(Xt);
  Xt.TokenType, Xt.Token, Xt.TokenError, Xt.TokenizeResult, Xt.tokenize;
  var jt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = function(e) {
          function t(e, i, r) {
              var a;
              return n(this, t), (a = l(this, o(t).call(this, i, r))).elementName = e, a
          }
          return a(t, Ft.ParseError), r(t, null, [{
              key: "create",
              value: function(e, n, i) {
                  return new t(e, n, i)
              }
          }]), t
      }();
      t.TreeError = i;
      var s = function e(t, i) {
          n(this, e), this.rootNodes = t, this.errors = i
      };
      t.ParseTreeResult = s;
      var c = function() {
          function e(t) {
              n(this, e), this.getTagDefinition = t
          }
          return r(e, [{
              key: "parse",
              value: function(e, t) {
                  var n = this,
                      i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rt.DEFAULT_INTERPOLATION_CONFIG,
                      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                      o = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                      l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6],
                      c = l ? this.getTagDefinition : function(e) {
                          return n.getTagDefinition(e.toLowerCase())
                      },
                      h = Xt.tokenize(e, t, c, i, r, a, o),
                      p = new u(h.tokens, c, a, o, l).build();
                  return new s(p.rootNodes, h.errors.concat(p.errors))
              }
          }]), e
      }();
      t.Parser = c;
      var u = function() {
          function e(t, i, r, a, o) {
              n(this, e), this.tokens = t, this.getTagDefinition = i, this.canSelfClose = r, this.allowHtmComponentClosingTags = a, this.isTagNameCaseSensitive = o, this._index = -1, this._rootNodes = [], this._errors = [], this._elementStack = [], this._advance()
          }
          return r(e, [{
              key: "build",
              value: function() {
                  for (; this._peek.type !== Xt.TokenType.EOF;) this._peek.type === Xt.TokenType.TAG_OPEN_START ? this._consumeStartTag(this._advance()) : this._peek.type === Xt.TokenType.TAG_CLOSE ? this._consumeEndTag(this._advance()) : this._peek.type === Xt.TokenType.CDATA_START ? (this._closeVoidElement(), this._consumeCdata(this._advance())) : this._peek.type === Xt.TokenType.COMMENT_START ? (this._closeVoidElement(), this._consumeComment(this._advance())) : this._peek.type === Xt.TokenType.TEXT || this._peek.type === Xt.TokenType.RAW_TEXT || this._peek.type === Xt.TokenType.ESCAPABLE_RAW_TEXT ? (this._closeVoidElement(), this._consumeText(this._advance())) : this._peek.type === Xt.TokenType.EXPANSION_FORM_START ? this._consumeExpansion(this._advance()) : this._peek.type === Xt.TokenType.DOC_TYPE_START ? this._consumeDocType(this._advance()) : this._advance();
                  return new s(this._rootNodes, this._errors)
              }
          }, {
              key: "_advance",
              value: function() {
                  var e = this._peek;
                  return this._index < this.tokens.length - 1 && this._index++, this._peek = this.tokens[this._index], e
              }
          }, {
              key: "_advanceIf",
              value: function(e) {
                  return this._peek.type === e ? this._advance() : null
              }
          }, {
              key: "_consumeCdata",
              value: function(e) {
                  var t = this._advance(),
                      n = this._getText(t),
                      i = this._advanceIf(Xt.TokenType.CDATA_END);
                  this._addToParent(new Ut.CDATA(n, new Ft.ParseSourceSpan(e.sourceSpan.start, (i || t).sourceSpan.end)))
              }
          }, {
              key: "_consumeComment",
              value: function(e) {
                  var t = this._advanceIf(Xt.TokenType.RAW_TEXT),
                      n = this._advanceIf(Xt.TokenType.COMMENT_END),
                      i = null != t ? t.parts[0].trim() : null,
                      r = new Ft.ParseSourceSpan(e.sourceSpan.start, (n || t || e).sourceSpan.end);
                  this._addToParent(new Ut.Comment(i, r))
              }
          }, {
              key: "_consumeDocType",
              value: function(e) {
                  var t = this._advanceIf(Xt.TokenType.RAW_TEXT),
                      n = this._advanceIf(Xt.TokenType.DOC_TYPE_END),
                      i = null != t ? t.parts[0].trim() : null,
                      r = new Ft.ParseSourceSpan(e.sourceSpan.start, (n || t || e).sourceSpan.end);
                  this._addToParent(new Ut.DocType(i, r))
              }
          }, {
              key: "_consumeExpansion",
              value: function(e) {
                  for (var t = this._advance(), n = this._advance(), r = []; this._peek.type === Xt.TokenType.EXPANSION_CASE_VALUE;) {
                      var a = this._parseExpansionCase();
                      if (!a) return;
                      r.push(a)
                  }
                  if (this._peek.type === Xt.TokenType.EXPANSION_FORM_END) {
                      var o = new Ft.ParseSourceSpan(e.sourceSpan.start, this._peek.sourceSpan.end);
                      this._addToParent(new Ut.Expansion(t.parts[0], n.parts[0], r, o, t.sourceSpan)), this._advance()
                  } else this._errors.push(i.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '}'."))
              }
          }, {
              key: "_parseExpansionCase",
              value: function() {
                  var t = this._advance();
                  if (this._peek.type !== Xt.TokenType.EXPANSION_CASE_EXP_START) return this._errors.push(i.create(null, this._peek.sourceSpan, "Invalid ICU message. Missing '{'.")), null;
                  var n = this._advance(),
                      r = this._collectExpansionExpTokens(n);
                  if (!r) return null;
                  var a = this._advance();
                  r.push(new Xt.Token(Xt.TokenType.EOF, [], a.sourceSpan));
                  var o = new e(r, this.getTagDefinition, this.canSelfClose, this.allowHtmComponentClosingTags, this.isTagNameCaseSensitive).build();
                  if (o.errors.length > 0) return this._errors = this._errors.concat(o.errors), null;
                  var s = new Ft.ParseSourceSpan(t.sourceSpan.start, a.sourceSpan.end),
                      l = new Ft.ParseSourceSpan(n.sourceSpan.start, a.sourceSpan.end);
                  return new Ut.ExpansionCase(t.parts[0], o.rootNodes, s, t.sourceSpan, l)
              }
          }, {
              key: "_collectExpansionExpTokens",
              value: function(e) {
                  for (var t = [], n = [Xt.TokenType.EXPANSION_CASE_EXP_START];;) {
                      if (this._peek.type !== Xt.TokenType.EXPANSION_FORM_START && this._peek.type !== Xt.TokenType.EXPANSION_CASE_EXP_START || n.push(this._peek.type), this._peek.type === Xt.TokenType.EXPANSION_CASE_EXP_END) {
                          if (!h(n, Xt.TokenType.EXPANSION_CASE_EXP_START)) return this._errors.push(i.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                          if (n.pop(), 0 == n.length) return t
                      }
                      if (this._peek.type === Xt.TokenType.EXPANSION_FORM_END) {
                          if (!h(n, Xt.TokenType.EXPANSION_FORM_START)) return this._errors.push(i.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                          n.pop()
                      }
                      if (this._peek.type === Xt.TokenType.EOF) return this._errors.push(i.create(null, e.sourceSpan, "Invalid ICU message. Missing '}'.")), null;
                      t.push(this._advance())
                  }
              }
          }, {
              key: "_getText",
              value: function(e) {
                  var t = e.parts[0];
                  if (t.length > 0 && "\n" == t[0]) {
                      var n = this._getParentElement();
                      null != n && 0 == n.children.length && this.getTagDefinition(n.name).ignoreFirstLf && (t = t.substring(1))
                  }
                  return t
              }
          }, {
              key: "_consumeText",
              value: function(e) {
                  var t = this._getText(e);
                  t.length > 0 && this._addToParent(new Ut.Text(t, e.sourceSpan))
              }
          }, {
              key: "_closeVoidElement",
              value: function() {
                  var e = this._getParentElement();
                  e && this.getTagDefinition(e.name).isVoid && this._elementStack.pop()
              }
          }, {
              key: "_consumeStartTag",
              value: function(e) {
                  for (var t = e.parts[0], n = e.parts[1], r = []; this._peek.type === Xt.TokenType.ATTR_NAME;) r.push(this._consumeAttr(this._advance()));
                  var a = this._getElementFullName(t, n, this._getParentElement()),
                      o = !1;
                  if (this._peek.type === Xt.TokenType.TAG_OPEN_END_VOID) {
                      this._advance(), o = !0;
                      var s = this.getTagDefinition(a);
                      this.canSelfClose || s.canSelfClose || null !== wt.getNsPrefix(a) || s.isVoid || this._errors.push(i.create(a, e.sourceSpan, 'Only void and foreign elements can be self closed "'.concat(e.parts[1], '"')))
                  } else this._peek.type === Xt.TokenType.TAG_OPEN_END && (this._advance(), o = !1);
                  var l = this._peek.sourceSpan.start,
                      c = new Ft.ParseSourceSpan(e.sourceSpan.start, l),
                      u = new Ft.ParseSourceSpan(e.sourceSpan.start.moveBy(1), e.sourceSpan.end),
                      h = new Ut.Element(a, r, [], c, c, void 0, u);
                  this._pushElement(h), o && (this._popElement(a), h.endSourceSpan = c)
              }
          }, {
              key: "_pushElement",
              value: function(e) {
                  var t = this._getParentElement();
                  t && this.getTagDefinition(t.name).isClosedByChild(e.name) && this._elementStack.pop();
                  var n = this.getTagDefinition(e.name),
                      i = this._getParentElementSkippingContainers(),
                      r = i.parent,
                      a = i.container;
                  if (r && n.requireExtraParent(r.name)) {
                      var o = new Ut.Element(n.parentToAdd, [], [], e.sourceSpan, e.startSourceSpan, e.endSourceSpan);
                      this._insertBeforeContainer(r, a, o)
                  }
                  this._addToParent(e), this._elementStack.push(e)
              }
          }, {
              key: "_consumeEndTag",
              value: function(e) {
                  var t = this.allowHtmComponentClosingTags && 0 === e.parts.length ? null : this._getElementFullName(e.parts[0], e.parts[1], this._getParentElement());
                  if (this._getParentElement() && (this._getParentElement().endSourceSpan = e.sourceSpan), t && this.getTagDefinition(t).isVoid) this._errors.push(i.create(t, e.sourceSpan, 'Void elements do not have end tags "'.concat(e.parts[1], '"')));
                  else if (!this._popElement(t)) {
                      var n = 'Unexpected closing tag "'.concat(t, '". It may happen when the tag has already been closed by another tag. For more info see https://www.w3.org/TR/html5/syntax.html#closing-elements-that-have-implied-end-tags');
                      this._errors.push(i.create(t, e.sourceSpan, n))
                  }
              }
          }, {
              key: "_popElement",
              value: function(e) {
                  for (var t = this._elementStack.length - 1; t >= 0; t--) {
                      var n = this._elementStack[t];
                      if (!e || (wt.getNsPrefix(n.name) ? n.name == e : n.name.toLowerCase() == e.toLowerCase())) return this._elementStack.splice(t, this._elementStack.length - t), !0;
                      if (!this.getTagDefinition(n.name).closedByParent) return !1
                  }
                  return !1
              }
          }, {
              key: "_consumeAttr",
              value: function(e) {
                  var t = wt.mergeNsAndName(e.parts[0], e.parts[1]),
                      n = e.sourceSpan.end,
                      i = "",
                      r = void 0;
                  if (this._peek.type === Xt.TokenType.ATTR_VALUE) {
                      var a = this._advance();
                      i = a.parts[0], n = a.sourceSpan.end, r = a.sourceSpan
                  }
                  return new Ut.Attribute(t, i, new Ft.ParseSourceSpan(e.sourceSpan.start, n), r, e.sourceSpan)
              }
          }, {
              key: "_getParentElement",
              value: function() {
                  return this._elementStack.length > 0 ? this._elementStack[this._elementStack.length - 1] : null
              }
          }, {
              key: "_getParentElementSkippingContainers",
              value: function() {
                  for (var e = null, t = this._elementStack.length - 1; t >= 0; t--) {
                      if (!wt.isNgContainer(this._elementStack[t].name)) return {
                          parent: this._elementStack[t],
                          container: e
                      };
                      e = this._elementStack[t]
                  }
                  return {
                      parent: null,
                      container: e
                  }
              }
          }, {
              key: "_addToParent",
              value: function(e) {
                  var t = this._getParentElement();
                  null != t ? t.children.push(e) : this._rootNodes.push(e)
              }
          }, {
              key: "_insertBeforeContainer",
              value: function(e, t, n) {
                  if (t) {
                      if (e) {
                          var i = e.children.indexOf(t);
                          e.children[i] = n
                      } else this._rootNodes.push(n);
                      n.children.push(t), this._elementStack.splice(this._elementStack.indexOf(t), 0, n)
                  } else this._addToParent(n), this._elementStack.push(n)
              }
          }, {
              key: "_getElementFullName",
              value: function(e, t, n) {
                  return null == e && null == (e = this.getTagDefinition(t).implicitNamespacePrefix) && null != n && (e = wt.getNsPrefix(n.name)), wt.mergeNsAndName(e, t)
              }
          }]), e
      }();

      function h(e, t) {
          return e.length > 0 && e[e.length - 1] === t
      }
  });
  Ge(jt);
  jt.TreeError, jt.ParseTreeResult, jt.Parser;
  var Vt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var i = jt;
      t.ParseTreeResult = i.ParseTreeResult, t.TreeError = i.TreeError;
      var s = function(e) {
          function t() {
              return n(this, t), l(this, o(t).call(this, Ot.getHtmlTagDefinition))
          }
          return a(t, jt.Parser), r(t, [{
              key: "parse",
              value: function(e, n) {
                  var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rt.DEFAULT_INTERPOLATION_CONFIG,
                      a = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                      s = arguments.length > 5 && void 0 !== arguments[5] && arguments[5],
                      l = arguments.length > 6 && void 0 !== arguments[6] && arguments[6];
                  return c(o(t.prototype), "parse", this).call(this, e, n, i, r, a, s, l)
              }
          }]), t
      }();
      t.HtmlParser = s
  });
  Ge(Vt);
  Vt.ParseTreeResult, Vt.TreeError, Vt.HtmlParser;
  var qt = We(function(e, t) {
      Object.defineProperty(t, "__esModule", {
          value: !0
      });
      var n = null,
          i = function() {
              return n || (n = new Vt.HtmlParser), n
          };
      t.parse = function(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
              n = t.canSelfClose,
              r = void 0 !== n && n,
              a = t.allowHtmComponentClosingTags,
              o = void 0 !== a && a,
              s = t.isTagNameCaseSensitive,
              l = void 0 !== s && s;
          return i().parse(e, "angular-html-parser", !1, void 0, r, o, l)
      }
  });
  Ge(qt);
  qt.parse;
  var zt = yt.HTML_ELEMENT_ATTRIBUTES,
      Ht = yt.HTML_TAGS,
      Gt = Tt,
      Wt = Nt.Node,
      Qt = xt;

  function Kt(e, t) {
      var i = t.recognizeSelfClosing,
          s = t.normalizeTagName,
          c = t.normalizeAttributeName,
          u = t.allowHtmComponentClosingTags,
          h = t.isTagNameCaseSensitive,
          p = qt,
          d = Ut.RecursiveVisitor,
          f = Ut.visitAll,
          m = Ut.Attribute,
          v = Ut.CDATA,
          _ = Ut.Comment,
          g = Ut.DocType,
          y = Ut.Element,
          T = Ut.Text,
          S = Ft.ParseSourceSpan,
          C = Ot.getHtmlTagDefinition,
          k = p.parse(e, {
              canSelfClose: i,
              allowHtmComponentClosingTags: u,
              isTagNameCaseSensitive: h
          }),
          E = k.rootNodes,
          A = k.errors;
      if (0 !== A.length) {
          var b = A[0],
              N = b.msg,
              P = b.span.start,
              x = P.line,
              w = P.col;
          throw St(N, {
              start: {
                  line: x + 1,
                  column: w + 1
              }
          })
      }
      var O = function(e) {
              var t = e.name.startsWith(":") ? e.name.slice(1).split(":")[0] : null,
                  n = e.nameSpan ? e.nameSpan.toString() : e.name,
                  i = n.startsWith("".concat(t, ":")),
                  r = i ? n.slice(t.length + 1) : n;
              e.name = r, e.namespace = t, e.hasExplicitNamespace = i
          },
          $ = function(e, t) {
              var n = e.toLowerCase();
              return t(n) ? n : e
          };
      return f(new(function(e) {
          function t() {
              return n(this, t), l(this, o(t).apply(this, arguments))
          }
          return a(t, d), r(t, [{
              key: "visit",
              value: function(e) {
                  ! function(e) {
                      if (e instanceof m) e.type = "attribute";
                      else if (e instanceof v) e.type = "cdata";
                      else if (e instanceof _) e.type = "comment";
                      else if (e instanceof g) e.type = "docType";
                      else if (e instanceof y) e.type = "element";
                      else {
                          if (!(e instanceof T)) throw new Error("Unexpected node ".concat(JSON.stringify(e)));
                          e.type = "text"
                      }
                  }(e),
                  function(e) {
                      e instanceof y ? (O(e), e.attrs.forEach(function(e) {
                          O(e), e.valueSpan ? (e.value = e.valueSpan.toString(), /['"]/.test(e.value[0]) && (e.value = e.value.slice(1, -1))) : e.value = null
                      })) : e instanceof _ ? e.value = e.sourceSpan.toString().slice("\x3c!--".length, -"--\x3e".length) : e instanceof T && (e.value = e.sourceSpan.toString())
                  }(e),
                  function(e) {
                      if (e instanceof y) {
                          var t = C(h ? e.name : e.name.toLowerCase());
                          e.namespace && e.namespace !== t.implicitNamespacePrefix ? e.tagDefinition = C("") : e.tagDefinition = t
                      }
                  }(e),
                  function(e) {
                      if (e instanceof y && (!s || e.namespace && e.namespace !== e.tagDefinition.implicitNamespacePrefix || (e.name = $(e.name, function(e) {
                              return e in Ht
                          })), c)) {
                          var t = zt[e.name] || Object.create(null);
                          e.attrs.forEach(function(n) {
                              n.namespace || (n.name = $(n.name, function(n) {
                                  return e.name in zt && (n in zt["*"] || n in t)
                              }))
                          })
                      }
                  }(e),
                  function(e) {
                      e.sourceSpan && e.endSourceSpan && (e.sourceSpan = new S(e.sourceSpan.start, e.endSourceSpan.end))
                  }(e)
              }
          }]), t
      }()), E), E
  }

  function Yt(e) {
      return e.sourceSpan.start.offset
  }

  function Jt(e) {
      return e.sourceSpan.end.offset
  }

  function Zt() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.recognizeSelfClosing,
          n = void 0 !== t && t,
          i = e.normalizeTagName,
          r = void 0 !== i && i,
          a = e.normalizeAttributeName,
          o = void 0 !== a && a,
          s = e.allowHtmComponentClosingTags,
          l = void 0 !== s && s,
          c = e.isTagNameCaseSensitive,
          u = void 0 !== c && c;
      return {
          parse: function(e, t, i) {
              return function e(t, n, i) {
                  var r = arguments.length > 3 && void 0 !== arguments[3] && !arguments[3] ? {
                          frontMatter: null,
                          content: t
                      } : f(t),
                      a = r.frontMatter,
                      o = r.content,
                      s = {
                          type: "root",
                          sourceSpan: {
                              start: {
                                  offset: 0
                              },
                              end: {
                                  offset: t.length
                              }
                          },
                          children: Kt(o, i)
                      };
                  a && s.children.unshift(a);
                  var l = new Wt(s),
                      c = function(r, a) {
                          var o = a.offset,
                              s = e(t.slice(0, o).replace(/[^\r\n]/g, " ") + r, n, i, !1),
                              l = s.children[0].sourceSpan.constructor;
                          s.sourceSpan = new l(a, s.children[s.children.length - 1].sourceSpan.end);
                          var c = s.children[0];
                          return c.length === o ? s.children.shift() : (c.sourceSpan = new l(c.sourceSpan.start.moveBy(o), c.sourceSpan.end), c.value = c.value.slice(o)), s
                      },
                      u = function(e) {
                          return "element" === e.type && !e.nameSpan
                      };
                  return l.map(function(e) {
                      if (e.children && e.children.some(u)) {
                          var t = [],
                              n = !0,
                              i = !1,
                              r = void 0;
                          try {
                              for (var a, o = e.children[Symbol.iterator](); !(n = (a = o.next()).done); n = !0) {
                                  var s = a.value;
                                  u(s) ? Array.prototype.push.apply(t, s.children) : t.push(s)
                              }
                          } catch (e) {
                              i = !0, r = e
                          } finally {
                              try {
                                  n || null == o.return || o.return()
                              } finally {
                                  if (i) throw r
                              }
                          }
                          return e.clone({
                              children: t
                          })
                      }
                      if ("comment" === e.type) {
                          var l = Qt(e, c);
                          if (l) return l
                      }
                      return e
                  })
              }(e, i, {
                  recognizeSelfClosing: n,
                  normalizeTagName: r,
                  normalizeAttributeName: o,
                  allowHtmComponentClosingTags: l,
                  isTagNameCaseSensitive: u
              })
          },
          hasPragma: Gt,
          astFormat: "html",
          locStart: Yt,
          locEnd: Jt
      }
  }
  var en = {
          parsers: {
              html: Zt({
                  recognizeSelfClosing: !0,
                  normalizeTagName: !0,
                  normalizeAttributeName: !0,
                  allowHtmComponentClosingTags: !0
              }),
              angular: Zt(),
              vue: Zt({
                  recognizeSelfClosing: !0,
                  isTagNameCaseSensitive: !0
              }),
              lwc: Zt()
          }
      },
      tn = en.parsers;
  e.default = en, e.parsers = tn, Object.defineProperty(e, "__esModule", {
      value: !0
  })
});