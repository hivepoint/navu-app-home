"use strict"; (() => {
  var zi = Object.defineProperty; var Ui = Object.getOwnPropertyDescriptor; var a = (i, t, e, r) => { for (var o = r > 1 ? void 0 : r ? Ui(t, e) : t, n = i.length - 1, s; n >= 0; n--)(s = i[n]) && (o = (r ? s(t, e, o) : s(o)) || o); return r && o && zi(t, e, o), o }; var Vt = window, Kt = Vt.ShadowRoot && (Vt.ShadyCSS === void 0 || Vt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, de = Symbol(), je = new WeakMap, Pt = class { constructor(t, e, r) { if (this._$cssResult$ = !0, r !== de) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead."); this.cssText = t, this.t = e } get styleSheet() { let t = this.o, e = this.t; if (Kt && t === void 0) { let r = e !== void 0 && e.length === 1; r && (t = je.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet).replaceSync(this.cssText), r && je.set(e, t)) } return t } toString() { return this.cssText } }, Ze = i => new Pt(typeof i == "string" ? i : i + "", void 0, de), v = (i, ...t) => { let e = i.length === 1 ? i[0] : t.reduce((r, o, n) => r + (s => { if (s._$cssResult$ === !0) return s.cssText; if (typeof s == "number") return s; throw Error("Value passed to 'css' function must be a 'css' function result: " + s + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.") })(o) + i[n + 1], i[0]); return new Pt(e, i, de) }, pe = (i, t) => { Kt ? i.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet) : t.forEach(e => { let r = document.createElement("style"), o = Vt.litNonce; o !== void 0 && r.setAttribute("nonce", o), r.textContent = e.cssText, i.appendChild(r) }) }, Yt = Kt ? i => i : i => i instanceof CSSStyleSheet ? (t => { let e = ""; for (let r of t.cssRules) e += r.cssText; return Ze(e) })(i) : i; var he, Xt = window, Fe = Xt.trustedTypes, Hi = Fe ? Fe.emptyScript : "", Ve = Xt.reactiveElementPolyfillSupport, me = { toAttribute(i, t) { switch (t) { case Boolean: i = i ? Hi : null; break; case Object: case Array: i = i == null ? i : JSON.stringify(i) }return i }, fromAttribute(i, t) { let e = i; switch (t) { case Boolean: e = i !== null; break; case Number: e = i === null ? null : Number(i); break; case Object: case Array: try { e = JSON.parse(i) } catch { e = null } }return e } }, Ke = (i, t) => t !== i && (t == t || i == i), ue = { attribute: !0, type: String, converter: me, reflect: !1, hasChanged: Ke }, K = class extends HTMLElement { constructor() { super(), this._$Ei = new Map, this.isUpdatePending = !1, this.hasUpdated = !1, this._$El = null, this.u() } static addInitializer(t) { var e; this.finalize(), ((e = this.h) !== null && e !== void 0 ? e : this.h = []).push(t) } static get observedAttributes() { this.finalize(); let t = []; return this.elementProperties.forEach((e, r) => { let o = this._$Ep(r, e); o !== void 0 && (this._$Ev.set(o, r), t.push(o)) }), t } static createProperty(t, e = ue) { if (e.state && (e.attribute = !1), this.finalize(), this.elementProperties.set(t, e), !e.noAccessor && !this.prototype.hasOwnProperty(t)) { let r = typeof t == "symbol" ? Symbol() : "__" + t, o = this.getPropertyDescriptor(t, r, e); o !== void 0 && Object.defineProperty(this.prototype, t, o) } } static getPropertyDescriptor(t, e, r) { return { get() { return this[e] }, set(o) { let n = this[t]; this[e] = o, this.requestUpdate(t, n, r) }, configurable: !0, enumerable: !0 } } static getPropertyOptions(t) { return this.elementProperties.get(t) || ue } static finalize() { if (this.hasOwnProperty("finalized")) return !1; this.finalized = !0; let t = Object.getPrototypeOf(this); if (t.finalize(), t.h !== void 0 && (this.h = [...t.h]), this.elementProperties = new Map(t.elementProperties), this._$Ev = new Map, this.hasOwnProperty("properties")) { let e = this.properties, r = [...Object.getOwnPropertyNames(e), ...Object.getOwnPropertySymbols(e)]; for (let o of r) this.createProperty(o, e[o]) } return this.elementStyles = this.finalizeStyles(this.styles), !0 } static finalizeStyles(t) { let e = []; if (Array.isArray(t)) { let r = new Set(t.flat(1 / 0).reverse()); for (let o of r) e.unshift(Yt(o)) } else t !== void 0 && e.push(Yt(t)); return e } static _$Ep(t, e) { let r = e.attribute; return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0 } u() { var t; this._$E_ = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$Eg(), this.requestUpdate(), (t = this.constructor.h) === null || t === void 0 || t.forEach(e => e(this)) } addController(t) { var e, r; ((e = this._$ES) !== null && e !== void 0 ? e : this._$ES = []).push(t), this.renderRoot !== void 0 && this.isConnected && ((r = t.hostConnected) === null || r === void 0 || r.call(t)) } removeController(t) { var e; (e = this._$ES) === null || e === void 0 || e.splice(this._$ES.indexOf(t) >>> 0, 1) } _$Eg() { this.constructor.elementProperties.forEach((t, e) => { this.hasOwnProperty(e) && (this._$Ei.set(e, this[e]), delete this[e]) }) } createRenderRoot() { var t; let e = (t = this.shadowRoot) !== null && t !== void 0 ? t : this.attachShadow(this.constructor.shadowRootOptions); return pe(e, this.constructor.elementStyles), e } connectedCallback() { var t; this.renderRoot === void 0 && (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$ES) === null || t === void 0 || t.forEach(e => { var r; return (r = e.hostConnected) === null || r === void 0 ? void 0 : r.call(e) }) } enableUpdating(t) { } disconnectedCallback() { var t; (t = this._$ES) === null || t === void 0 || t.forEach(e => { var r; return (r = e.hostDisconnected) === null || r === void 0 ? void 0 : r.call(e) }) } attributeChangedCallback(t, e, r) { this._$AK(t, r) } _$EO(t, e, r = ue) { var o; let n = this.constructor._$Ep(t, r); if (n !== void 0 && r.reflect === !0) { let s = (((o = r.converter) === null || o === void 0 ? void 0 : o.toAttribute) !== void 0 ? r.converter : me).toAttribute(e, r.type); this._$El = t, s == null ? this.removeAttribute(n) : this.setAttribute(n, s), this._$El = null } } _$AK(t, e) { var r; let o = this.constructor, n = o._$Ev.get(t); if (n !== void 0 && this._$El !== n) { let s = o.getPropertyOptions(n), c = typeof s.converter == "function" ? { fromAttribute: s.converter } : ((r = s.converter) === null || r === void 0 ? void 0 : r.fromAttribute) !== void 0 ? s.converter : me; this._$El = n, this[n] = c.fromAttribute(e, s.type), this._$El = null } } requestUpdate(t, e, r) { let o = !0; t !== void 0 && (((r = r || this.constructor.getPropertyOptions(t)).hasChanged || Ke)(this[t], e) ? (this._$AL.has(t) || this._$AL.set(t, e), r.reflect === !0 && this._$El !== t && (this._$EC === void 0 && (this._$EC = new Map), this._$EC.set(t, r))) : o = !1), !this.isUpdatePending && o && (this._$E_ = this._$Ej()) } async _$Ej() { this.isUpdatePending = !0; try { await this._$E_ } catch (e) { Promise.reject(e) } let t = this.scheduleUpdate(); return t != null && await t, !this.isUpdatePending } scheduleUpdate() { return this.performUpdate() } performUpdate() { var t; if (!this.isUpdatePending) return; this.hasUpdated, this._$Ei && (this._$Ei.forEach((o, n) => this[n] = o), this._$Ei = void 0); let e = !1, r = this._$AL; try { e = this.shouldUpdate(r), e ? (this.willUpdate(r), (t = this._$ES) === null || t === void 0 || t.forEach(o => { var n; return (n = o.hostUpdate) === null || n === void 0 ? void 0 : n.call(o) }), this.update(r)) : this._$Ek() } catch (o) { throw e = !1, this._$Ek(), o } e && this._$AE(r) } willUpdate(t) { } _$AE(t) { var e; (e = this._$ES) === null || e === void 0 || e.forEach(r => { var o; return (o = r.hostUpdated) === null || o === void 0 ? void 0 : o.call(r) }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t) } _$Ek() { this._$AL = new Map, this.isUpdatePending = !1 } get updateComplete() { return this.getUpdateComplete() } getUpdateComplete() { return this._$E_ } shouldUpdate(t) { return !0 } update(t) { this._$EC !== void 0 && (this._$EC.forEach((e, r) => this._$EO(r, this[r], e)), this._$EC = void 0), this._$Ek() } updated(t) { } firstUpdated(t) { } }; K.finalized = !0, K.elementProperties = new Map, K.elementStyles = [], K.shadowRootOptions = { mode: "open" }, Ve?.({ ReactiveElement: K }), ((he = Xt.reactiveElementVersions) !== null && he !== void 0 ? he : Xt.reactiveElementVersions = []).push("1.6.1"); var fe, Jt = window, wt = Jt.trustedTypes, Ye = wt ? wt.createPolicy("lit-html", { createHTML: i => i }) : void 0, Q = `lit$${(Math.random() + "").slice(9)}$`, ri = "?" + Q, Bi = `<${ri}>`, _t = document, It = (i = "") => _t.createComment(i), Dt = i => i === null || typeof i != "object" && typeof i != "function", oi = Array.isArray, Ni = i => oi(i) || typeof i?.[Symbol.iterator] == "function", Lt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Xe = /-->/g, Je = />/g, dt = RegExp(`>|[ 	
\f\r](?:([^\\s"'>=/]+)([ 	
\f\r]*=[ 	
\f\r]*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, ti = /"/g, ni = /^(?:script|style|textarea|title)$/i, si = i => (t, ...e) => ({ _$litType$: i, strings: t, values: e }), d = si(1), Mr = si(2), H = Symbol.for("lit-noChange"), S = Symbol.for("lit-nothing"), ei = new WeakMap, yt = _t.createTreeWalker(_t, 129, null, !1), qi = (i, t) => { let e = i.length - 1, r = [], o, n = t === 2 ? "<svg>" : "", s = Lt; for (let l = 0; l < e; l++) { let p = i[l], g, h, m = -1, b = 0; for (; b < p.length && (s.lastIndex = b, h = s.exec(p), h !== null);)b = s.lastIndex, s === Lt ? h[1] === "!--" ? s = Xe : h[1] !== void 0 ? s = Je : h[2] !== void 0 ? (ni.test(h[2]) && (o = RegExp("</" + h[2], "g")), s = dt) : h[3] !== void 0 && (s = dt) : s === dt ? h[0] === ">" ? (s = o ?? Lt, m = -1) : h[1] === void 0 ? m = -2 : (m = s.lastIndex - h[2].length, g = h[1], s = h[3] === void 0 ? dt : h[3] === '"' ? ti : Qe) : s === ti || s === Qe ? s = dt : s === Xe || s === Je ? s = Lt : (s = dt, o = void 0); let _ = s === dt && i[l + 1].startsWith("/>") ? " " : ""; n += s === Lt ? p + Bi : m >= 0 ? (r.push(g), p.slice(0, m) + "$lit$" + p.slice(m) + Q + _) : p + Q + (m === -2 ? (r.push(void 0), l) : _) } let c = n + (i[e] || "<?>") + (t === 2 ? "</svg>" : ""); if (!Array.isArray(i) || !i.hasOwnProperty("raw")) throw Error("invalid template strings array"); return [Ye !== void 0 ? Ye.createHTML(c) : c, r] }, pt = class { constructor({ strings: t, _$litType$: e }, r) { let o; this.parts = []; let n = 0, s = 0, c = t.length - 1, l = this.parts, [p, g] = qi(t, e); if (this.el = pt.createElement(p, r), yt.currentNode = this.el.content, e === 2) { let h = this.el.content, m = h.firstChild; m.remove(), h.append(...m.childNodes) } for (; (o = yt.nextNode()) !== null && l.length < c;) { if (o.nodeType === 1) { if (o.hasAttributes()) { let h = []; for (let m of o.getAttributeNames()) if (m.endsWith("$lit$") || m.startsWith(Q)) { let b = g[s++]; if (h.push(m), b !== void 0) { let _ = o.getAttribute(b.toLowerCase() + "$lit$").split(Q), M = /([.?@])?(.*)/.exec(b); l.push({ type: 1, index: n, name: M[2], strings: _, ctor: M[1] === "." ? ve : M[1] === "?" ? be : M[1] === "@" ? xe : At }) } else l.push({ type: 6, index: n }) } for (let m of h) o.removeAttribute(m) } if (ni.test(o.tagName)) { let h = o.textContent.split(Q), m = h.length - 1; if (m > 0) { o.textContent = wt ? wt.emptyScript : ""; for (let b = 0; b < m; b++)o.append(h[b], It()), yt.nextNode(), l.push({ type: 2, index: ++n }); o.append(h[m], It()) } } } else if (o.nodeType === 8) if (o.data === ri) l.push({ type: 2, index: n }); else { let h = -1; for (; (h = o.data.indexOf(Q, h + 1)) !== -1;)l.push({ type: 7, index: n }), h += Q.length - 1 } n++ } } static createElement(t, e) { let r = _t.createElement("template"); return r.innerHTML = t, r } }; function $t(i, t, e = i, r) { var o, n, s, c; if (t === H) return t; let l = r !== void 0 ? (o = e._$Co) === null || o === void 0 ? void 0 : o[r] : e._$Cl, p = Dt(t) ? void 0 : t._$litDirective$; return l?.constructor !== p && ((n = l?._$AO) === null || n === void 0 || n.call(l, !1), p === void 0 ? l = void 0 : (l = new p(i), l._$AT(i, e, r)), r !== void 0 ? ((s = (c = e)._$Co) !== null && s !== void 0 ? s : c._$Co = [])[r] = l : e._$Cl = l), l !== void 0 && (t = $t(i, l._$AS(i, t.values), l, r)), t } var ge = class { constructor(t, e) { this.u = [], this._$AN = void 0, this._$AD = t, this._$AM = e } get parentNode() { return this._$AM.parentNode } get _$AU() { return this._$AM._$AU } v(t) { var e; let { el: { content: r }, parts: o } = this._$AD, n = ((e = t?.creationScope) !== null && e !== void 0 ? e : _t).importNode(r, !0); yt.currentNode = n; let s = yt.nextNode(), c = 0, l = 0, p = o[0]; for (; p !== void 0;) { if (c === p.index) { let g; p.type === 2 ? g = new ht(s, s.nextSibling, this, t) : p.type === 1 ? g = new p.ctor(s, p.name, p.strings, this, t) : p.type === 6 && (g = new ye(s, this, t)), this.u.push(g), p = o[++l] } c !== p?.index && (s = yt.nextNode(), c++) } return n } p(t) { let e = 0; for (let r of this.u) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++ } }, ht = class { constructor(t, e, r, o) { var n; this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = o, this._$Cm = (n = o?.isConnected) === null || n === void 0 || n } get _$AU() { var t, e; return (e = (t = this._$AM) === null || t === void 0 ? void 0 : t._$AU) !== null && e !== void 0 ? e : this._$Cm } get parentNode() { let t = this._$AA.parentNode, e = this._$AM; return e !== void 0 && t.nodeType === 11 && (t = e.parentNode), t } get startNode() { return this._$AA } get endNode() { return this._$AB } _$AI(t, e = this) { t = $t(this, t, e), Dt(t) ? t === S || t == null || t === "" ? (this._$AH !== S && this._$AR(), this._$AH = S) : t !== this._$AH && t !== H && this.g(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : Ni(t) ? this.k(t) : this.g(t) } O(t, e = this._$AB) { return this._$AA.parentNode.insertBefore(t, e) } T(t) { this._$AH !== t && (this._$AR(), this._$AH = this.O(t)) } g(t) { this._$AH !== S && Dt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(_t.createTextNode(t)), this._$AH = t } $(t) { var e; let { values: r, _$litType$: o } = t, n = typeof o == "number" ? this._$AC(t) : (o.el === void 0 && (o.el = pt.createElement(o.h, this.options)), o); if (((e = this._$AH) === null || e === void 0 ? void 0 : e._$AD) === n) this._$AH.p(r); else { let s = new ge(n, this), c = s.v(this.options); s.p(r), this.T(c), this._$AH = s } } _$AC(t) { let e = ei.get(t.strings); return e === void 0 && ei.set(t.strings, e = new pt(t)), e } k(t) { oi(this._$AH) || (this._$AH = [], this._$AR()); let e = this._$AH, r, o = 0; for (let n of t) o === e.length ? e.push(r = new ht(this.O(It()), this.O(It()), this, this.options)) : r = e[o], r._$AI(n), o++; o < e.length && (this._$AR(r && r._$AB.nextSibling, o), e.length = o) } _$AR(t = this._$AA.nextSibling, e) { var r; for ((r = this._$AP) === null || r === void 0 || r.call(this, !1, !0, e); t && t !== this._$AB;) { let o = t.nextSibling; t.remove(), t = o } } setConnected(t) { var e; this._$AM === void 0 && (this._$Cm = t, (e = this._$AP) === null || e === void 0 || e.call(this, t)) } }, At = class { constructor(t, e, r, o, n) { this.type = 1, this._$AH = S, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = n, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = S } get tagName() { return this.element.tagName } get _$AU() { return this._$AM._$AU } _$AI(t, e = this, r, o) { let n = this.strings, s = !1; if (n === void 0) t = $t(this, t, e, 0), s = !Dt(t) || t !== this._$AH && t !== H, s && (this._$AH = t); else { let c = t, l, p; for (t = n[0], l = 0; l < n.length - 1; l++)p = $t(this, c[r + l], e, l), p === H && (p = this._$AH[l]), s || (s = !Dt(p) || p !== this._$AH[l]), p === S ? t = S : t !== S && (t += (p ?? "") + n[l + 1]), this._$AH[l] = p } s && !o && this.j(t) } j(t) { t === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "") } }, ve = class extends At { constructor() { super(...arguments), this.type = 3 } j(t) { this.element[this.name] = t === S ? void 0 : t } }, Gi = wt ? wt.emptyScript : "", be = class extends At { constructor() { super(...arguments), this.type = 4 } j(t) { t && t !== S ? this.element.setAttribute(this.name, Gi) : this.element.removeAttribute(this.name) } }, xe = class extends At { constructor(t, e, r, o, n) { super(t, e, r, o, n), this.type = 5 } _$AI(t, e = this) { var r; if ((t = (r = $t(this, t, e, 0)) !== null && r !== void 0 ? r : S) === H) return; let o = this._$AH, n = t === S && o !== S || t.capture !== o.capture || t.once !== o.once || t.passive !== o.passive, s = t !== S && (o === S || n); n && this.element.removeEventListener(this.name, this, o), s && this.element.addEventListener(this.name, this, t), this._$AH = t } handleEvent(t) { var e, r; typeof this._$AH == "function" ? this._$AH.call((r = (e = this.options) === null || e === void 0 ? void 0 : e.host) !== null && r !== void 0 ? r : this.element, t) : this._$AH.handleEvent(t) } }, ye = class { constructor(t, e, r) { this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r } get _$AU() { return this._$AM._$AU } _$AI(t) { $t(this, t) } }; var ii = Jt.litHtmlPolyfillSupport; ii?.(pt, ht), ((fe = Jt.litHtmlVersions) !== null && fe !== void 0 ? fe : Jt.litHtmlVersions = []).push("2.6.1"); var ai = (i, t, e) => { var r, o; let n = (r = e?.renderBefore) !== null && r !== void 0 ? r : t, s = n._$litPart$; if (s === void 0) { let c = (o = e?.renderBefore) !== null && o !== void 0 ? o : null; n._$litPart$ = s = new ht(t.insertBefore(It(), c), c, void 0, e ?? {}) } return s._$AI(i), s }; var we, _e; var tt = class extends K { constructor() { super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0 } createRenderRoot() { var t, e; let r = super.createRenderRoot(); return (t = (e = this.renderOptions).renderBefore) !== null && t !== void 0 || (e.renderBefore = r.firstChild), r } update(t) { let e = this.render(); this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ai(e, this.renderRoot, this.renderOptions) } connectedCallback() { var t; super.connectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!0) } disconnectedCallback() { var t; super.disconnectedCallback(), (t = this._$Do) === null || t === void 0 || t.setConnected(!1) } render() { return H } }; tt.finalized = !0, tt._$litElement$ = !0, (we = globalThis.litElementHydrateSupport) === null || we === void 0 || we.call(globalThis, { LitElement: tt }); var li = globalThis.litElementPolyfillSupport; li?.({ LitElement: tt }); ((_e = globalThis.litElementVersions) !== null && _e !== void 0 ? _e : globalThis.litElementVersions = []).push("3.2.2"); var x = i => t => typeof t == "function" ? ((e, r) => (customElements.define(e, r), r))(i, t) : ((e, r) => { let { kind: o, elements: n } = r; return { kind: o, elements: n, finisher(s) { customElements.define(e, s) } } })(i, t); var Wi = (i, t) => t.kind === "method" && t.descriptor && !("value" in t.descriptor) ? { ...t, finisher(e) { e.createProperty(t.key, i) } } : { kind: "field", key: Symbol(), placement: "own", descriptor: {}, originalKey: t.key, initializer() { typeof t.initializer == "function" && (this[t.key] = t.initializer.call(this)) }, finisher(e) { e.createProperty(t.key, i) } }; function u(i) { return (t, e) => e !== void 0 ? ((r, o, n) => { o.constructor.createProperty(n, r) })(i, t, e) : Wi(i, t) } function y(i) { return u({ ...i, state: !0 }) } var et = ({ finisher: i, descriptor: t }) => (e, r) => { var o; if (r === void 0) { let n = (o = e.originalKey) !== null && o !== void 0 ? o : e.key, s = t != null ? { kind: "method", placement: "prototype", key: n, descriptor: t(e.key) } : { ...e, key: n }; return i != null && (s.finisher = function (c) { i(c, n) }), s } { let n = e.constructor; t !== void 0 && Object.defineProperty(e, r, t(r)), i?.(n, r) } }; function T(i, t) { return et({ descriptor: e => { let r = { get() { var o, n; return (n = (o = this.renderRoot) === null || o === void 0 ? void 0 : o.querySelector(i)) !== null && n !== void 0 ? n : null }, enumerable: !0, configurable: !0 }; if (t) { let o = typeof e == "symbol" ? Symbol() : "__" + e; r.get = function () { var n, s; return this[o] === void 0 && (this[o] = (s = (n = this.renderRoot) === null || n === void 0 ? void 0 : n.querySelector(i)) !== null && s !== void 0 ? s : null), this[o] } } return r } }) } function Qt(i) { return et({ descriptor: t => ({ get() { var e, r; return (r = (e = this.renderRoot) === null || e === void 0 ? void 0 : e.querySelectorAll(i)) !== null && r !== void 0 ? r : [] }, enumerable: !0, configurable: !0 }) }) } var $e, io = (($e = window.HTMLSlotElement) === null || $e === void 0 ? void 0 : $e.prototype.assignedElements) != null ? (i, t) => i.assignedElements(t) : (i, t) => i.assignedNodes(t).filter(e => e.nodeType === Node.ELEMENT_NODE); var Ae = class extends Event { constructor(e, r) { super(e, { bubbles: !0, composed: !0 }); this._detail = r } get detail() { return this._detail } }, f = class extends tt { fire(t, e) { this.dispatchEvent(new Ae(t, e)) } }; f.styles = v`
    * {box-sizing: border-box;}
    [hidden] {display: none !important;}
    .horiz {display: flex; flex-direction: row;}
    .vert {display: flex; flex-direction: column;}
    .center {align-items: center;}
    .center2 {justify-content: center; align-items: center;}
    .flex {flex: 1;}
    .wrap {flex-wrap: wrap;}
    :host {
      --nv-font-family-default: "SF Pro Display", -apple-system, BlinkMacSystemFont, "San Francisco", "Helvetica Neue", Helvetica, Ubuntu, Roboto, Noto, "Segoe UI", Arial, sans-serif;
      font-family: var(--nv-font-family, var(--nv-font-family-default));
    }
  `; var Ot = class extends f {
    render() {
      return d`
    <div id="imagePanel">
      <svg viewBox="0 0 1142 317.35" preserveAspectRatio="xMidYMid meet" focusable="false">
        <path d="M15,141.64c0-68,54.39-123,121.6-123"/>
        <path d="M264,148.67c0-71.87-57.5-130-128.55-130"/>
        <line x1="15" y1="141.64" x2="15" y2="317.35"/>
        <line x1="264" y1="148.67" x2="264" y2="317.35"/>
        <path d="M318.5,309.6c60.08-114.93,143.55-276,143.55-276l132.45,276"/>
        <path d="M1127,178.6c0,68-54.39,123-121.6,123"/>
        <path d="M878,171.57c0,71.87,57.5,130,128.55,130"/>
        <line x1="1127" y1="178.6" x2="1127" y2="2.89"/>
        <line x1="878" y1="171.57" x2="878" y2="2.89"/>
        <path d="M823.5,7.6C763.42,122.52,680,283.6,680,283.6L547.5,7.6"/>
      </svg>
    </div>
    `}
  }; Ot.styles = [f.styles, v`
    :host {
      display: flex; flex-direction: row;
      justify-content: center; align-items: center;
      color: #000;
      --navu-home-logo-height: 30px;
      line-height: 1;
    }
    #imagePanel {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: currentColor;
      stroke: none;
      height: var(--navu-home-logo-height);
    }
    svg {
      pointer-events: none;
      display: block;
      height: 100%;
      width: auto;
      stroke: currentColor;
      fill: none;
      stroke-width: 30;
    }
    `], Ot = a([x("navu-home-logo")], Ot); var Ee = class { constructor() { this._map = new Map } get(t) { return this._map.get(t) || null } define(t) { for (let e in t) this._map.set(e, t[e]) } clear() { this._map.clear() } }, te = new Ee; var Et = class extends f {
    render() {
      if (this.icon) {
        let e = te.get(this.icon) || this.icon; return d`
        <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false">
          <g>
            <path d=${e}></path>
          </g>
        </svg>
      `} return d`<slot></slot>`
    }
  }; Et.styles = [f.styles, v`
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        position: relative;
        vertical-align: middle;
        fill: currentColor;
        stroke: none;
        width: 24px;
        height: 24px;
      }
      svg {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
      }
      ::slotted(svg) {
        pointer-events: none;
        display: block;
        width: 100%;
        height: 100%;
        fill: currentColor;
        stroke: none;
      }
    `], a([u()], Et.prototype, "icon", 2), Et = a([x("nv-home-icon")], Et); var N = class extends f {
    constructor() { super(...arguments); this.disabled = !1; this.mini = !1 } render() {
      return d`
    <button aria-label="${this.label || this.icon || ""}" ?disabled="${this.disabled}">
      <nv-home-icon .icon="${this.icon}"></nv-home-icon>
    </button>
    `} focus() { var e; (e = this._b) == null || e.focus() } blur() { var e; (e = this._b) == null || e.blur() }
  }; N.styles = [f.styles, v`
      :host {
        display: inline-block;
        vertical-align: top;
        color: var(--nv-primary, #6200ee);
      }
      button {
        background: none;
        cursor: pointer;
        outline: none;
        border: none;
        border-radius: 50%;
        overflow: hidden;
        padding: var(--nv-icon-button-padding, 12px);
        color: inherit;
        user-select: none;
        position: relative;
        display: block;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        border-radius: 50%;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.2;
      }
      button:active::after {
        opacity: 0.2;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      nv-icon {
        width: var(--nv-icon-size, 24px);
        height: var(--nv-icon-size, 24px);
      }

      :host([mini]) button {
        padding: var(--nv-icon-button-padding, 8px);
      }

      :host([disabled]) button {
        color: var(--nv-disabled-color, rgba(0, 0, 0, 0.38));
        cursor: initial;
        pointer-events: none;
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.1;
        }
        button:focus:hover::before {
          opacity: 0.2;
        }
      }
    `], a([u({ type: Boolean, reflect: !0 })], N.prototype, "disabled", 2), a([u({ type: Boolean, reflect: !0 })], N.prototype, "mini", 2), a([u()], N.prototype, "icon", 2), a([u()], N.prototype, "label", 2), a([T("button")], N.prototype, "_b", 2), N = a([x("nv-home-icon-button")], N); function Se(i, t) { i.indexOf(t) === -1 && i.push(t) } var zt = (i, t, e) => Math.min(Math.max(e, i), t); var k = { duration: .3, delay: 0, endDelay: 0, repeat: 0, easing: "ease" }; var B = i => typeof i == "number"; var q = i => Array.isArray(i) && !B(i[0]); var ci = (i, t, e) => { let r = t - i; return ((e - i) % r + r) % r + i }; function di(i, t) { return q(i) ? i[ci(0, i.length, t)] : i } var ee = (i, t, e) => -e * i + e * t + i; var Ut = () => { }, C = i => i; var ut = (i, t, e) => t - i === 0 ? 1 : (e - i) / (t - i); function Te(i, t) { let e = i[i.length - 1]; for (let r = 1; r <= t; r++) { let o = ut(0, t, r); i.push(ee(e, 1, o)) } } function pi(i) { let t = [0]; return Te(t, i - 1), t } function Ce(i, t = pi(i.length), e = C) { let r = i.length, o = r - t.length; return o > 0 && Te(t, o), n => { let s = 0; for (; s < r - 2 && !(n < t[s + 1]); s++); let c = zt(0, 1, ut(t[s], t[s + 1], n)); return c = di(e, s)(c), ee(i[s], i[s + 1], c) } } var Ht = i => Array.isArray(i) && B(i[0]); var St = i => typeof i == "object" && Boolean(i.createAnimation); var O = i => typeof i == "function"; var Bt = i => typeof i == "string"; var G = { ms: i => i * 1e3, s: i => i / 1e3 }; function Me(i, t) { return t ? i * (1e3 / t) : 0 } var hi = (i, t, e) => (((1 - 3 * e + 3 * t) * i + (3 * e - 6 * t)) * i + 3 * t) * i, ji = 1e-7, Zi = 12; function Fi(i, t, e, r, o) { let n, s, c = 0; do s = t + (e - t) / 2, n = hi(s, r, o) - i, n > 0 ? e = s : t = s; while (Math.abs(n) > ji && ++c < Zi); return s } function mt(i, t, e, r) { if (i === t && e === r) return C; let o = n => Fi(n, 0, 1, i, e); return n => n === 0 || n === 1 ? n : hi(o(n), t, r) } var ke = (i, t = "end") => e => { e = t === "end" ? Math.min(e, .999) : Math.max(e, .001); let r = e * i, o = t === "end" ? Math.floor(r) : Math.ceil(r); return zt(0, 1, o / i) }; var ui = { ease: mt(.25, .1, .25, 1), "ease-in": mt(.42, 0, 1, 1), "ease-in-out": mt(.42, 0, .58, 1), "ease-out": mt(0, 0, .58, 1) }, Vi = /\((.*?)\)/; function Re(i) { if (O(i)) return i; if (Ht(i)) return mt(...i); if (ui[i]) return ui[i]; if (i.startsWith("steps")) { let t = Vi.exec(i); if (t) { let e = t[1].split(","); return ke(parseFloat(e[0]), e[1].trim()) } } return C } var ft = class { constructor(t, e = [0, 1], { easing: r, duration: o = k.duration, delay: n = k.delay, endDelay: s = k.endDelay, repeat: c = k.repeat, offset: l, direction: p = "normal" } = {}) { if (this.startTime = null, this.rate = 1, this.t = 0, this.cancelTimestamp = null, this.easing = C, this.duration = 0, this.totalDuration = 0, this.repeat = 0, this.playState = "idle", this.finished = new Promise((h, m) => { this.resolve = h, this.reject = m }), r = r || k.easing, St(r)) { let h = r.createAnimation(e); r = h.easing, e = h.keyframes || e, o = h.duration || o } this.repeat = c, this.easing = q(r) ? C : Re(r), this.updateDuration(o); let g = Ce(e, l, q(r) ? r.map(Re) : C); this.tick = h => { var m; n = n; let b = 0; this.pauseTime !== void 0 ? b = this.pauseTime : b = (h - this.startTime) * this.rate, this.t = b, b /= 1e3, b = Math.max(b - n, 0), this.playState === "finished" && this.pauseTime === void 0 && (b = this.totalDuration); let _ = b / this.duration, M = Math.floor(_), $ = _ % 1; !$ && _ >= 1 && ($ = 1), $ === 1 && M--; let P = M % 2; (p === "reverse" || p === "alternate" && P || p === "alternate-reverse" && !P) && ($ = 1 - $); let V = b >= this.totalDuration ? 1 : Math.min($, 1), I = g(this.easing(V)); t(I), this.pauseTime === void 0 && (this.playState === "finished" || b >= this.totalDuration + s) ? (this.playState = "finished", (m = this.resolve) === null || m === void 0 || m.call(this, I)) : this.playState !== "idle" && (this.frameRequestId = requestAnimationFrame(this.tick)) }, this.play() } play() { let t = performance.now(); this.playState = "running", this.pauseTime !== void 0 ? this.startTime = t - this.pauseTime : this.startTime || (this.startTime = t), this.cancelTimestamp = this.startTime, this.pauseTime = void 0, this.frameRequestId = requestAnimationFrame(this.tick) } pause() { this.playState = "paused", this.pauseTime = this.t } finish() { this.playState = "finished", this.tick(0) } stop() { var t; this.playState = "idle", this.frameRequestId !== void 0 && cancelAnimationFrame(this.frameRequestId), (t = this.reject) === null || t === void 0 || t.call(this, !1) } cancel() { this.stop(), this.tick(this.cancelTimestamp) } reverse() { this.rate *= -1 } commitStyles() { } updateDuration(t) { this.duration = t, this.totalDuration = t * (this.repeat + 1) } get currentTime() { return this.t } set currentTime(t) { this.pauseTime !== void 0 || this.rate === 0 ? this.pauseTime = t : this.startTime = performance.now() - t / this.rate } get playbackRate() { return this.rate } set playbackRate(t) { this.rate = t } }; var Pe = function () { }; var Nt = class { setAnimation(t) { this.animation = t, t?.finished.then(() => this.clearAnimation()).catch(() => { }) } clearAnimation() { this.animation = this.generator = void 0 } }; var Le = new WeakMap; function ie(i) { return Le.has(i) || Le.set(i, { transforms: [], values: new Map }), Le.get(i) } function mi(i, t) { return i.has(t) || i.set(t, new Nt), i.get(t) } var Ki = ["", "X", "Y", "Z"], Yi = ["translate", "scale", "rotate", "skew"], qt = { x: "translateX", y: "translateY", z: "translateZ" }, fi = { syntax: "<angle>", initialValue: "0deg", toDefaultUnit: i => i + "deg" }, Xi = { translate: { syntax: "<length-percentage>", initialValue: "0px", toDefaultUnit: i => i + "px" }, rotate: fi, scale: { syntax: "<number>", initialValue: 1, toDefaultUnit: C }, skew: fi }, W = new Map, oe = i => `--motion-${i}`, re = ["x", "y", "z"]; Yi.forEach(i => { Ki.forEach(t => { re.push(i + t), W.set(oe(i + t), Xi[i]) }) }); var Ji = (i, t) => re.indexOf(i) - re.indexOf(t), Qi = new Set(re), ne = i => Qi.has(i), gi = (i, t) => { qt[t] && (t = qt[t]); let { transforms: e } = ie(i); Se(e, t), i.style.transform = tr(e) }, tr = i => i.sort(Ji).reduce(er, "").trim(), er = (i, t) => `${i} ${t}(var(${oe(t)}))`; var Gt = i => i.startsWith("--"), vi = new Set; function bi(i) { if (!vi.has(i)) { vi.add(i); try { let { syntax: t, initialValue: e } = W.has(i) ? W.get(i) : {}; CSS.registerProperty({ name: i, inherits: !1, syntax: t, initialValue: e }) } catch { } } } var Ie = (i, t) => document.createElement("div").animate(i, t), xi = { cssRegisterProperty: () => typeof CSS < "u" && Object.hasOwnProperty.call(CSS, "registerProperty"), waapi: () => Object.hasOwnProperty.call(Element.prototype, "animate"), partialKeyframes: () => { try { Ie({ opacity: [1] }) } catch { return !1 } return !0 }, finished: () => Boolean(Ie({ opacity: [0, 1] }, { duration: .001 }).finished), linearEasing: () => { try { Ie({ opacity: 0 }, { easing: "linear(0, 1)" }) } catch { return !1 } return !0 } }, De = {}, it = {}; for (let i in xi) it[i] = () => (De[i] === void 0 && (De[i] = xi[i]()), De[i]); var ir = .015, rr = (i, t) => { let e = "", r = Math.round(t / ir); for (let o = 0; o < r; o++)e += i(ut(0, r - 1, o)) + ", "; return e.substring(0, e.length - 2) }, Oe = (i, t) => O(i) ? it.linearEasing() ? `linear(${rr(i, t)})` : k.easing : Ht(i) ? or(i) : i, or = ([i, t, e, r]) => `cubic-bezier(${i}, ${t}, ${e}, ${r})`; function yi(i, t) { for (let e = 0; e < i.length; e++)i[e] === null && (i[e] = e ? i[e - 1] : t()); return i } var wi = i => Array.isArray(i) ? i : [i]; function gt(i) { return qt[i] && (i = qt[i]), ne(i) ? oe(i) : i } var Wt = { get: (i, t) => { t = gt(t); let e = Gt(t) ? i.style.getPropertyValue(t) : getComputedStyle(i)[t]; if (!e && e !== 0) { let r = W.get(t); r && (e = r.initialValue) } return e }, set: (i, t, e) => { t = gt(t), Gt(t) ? i.style.setProperty(t, e) : i.style[t] = e } }; function se(i, t = !0) { if (!(!i || i.playState === "finished")) try { i.stop ? i.stop() : (t && i.commitStyles(), i.cancel()) } catch { } } function ae(i, t) { var e; let r = t?.toDefaultUnit || C, o = i[i.length - 1]; if (Bt(o)) { let n = ((e = o.match(/(-?[\d.]+)([a-z%]*)/)) === null || e === void 0 ? void 0 : e[2]) || ""; n && (r = s => s + n) } return r } function nr() { return window.__MOTION_DEV_TOOLS_RECORD } function _i(i, t, e, r = {}, o) { let n = nr(), s = r.record !== !1 && n, c, { duration: l = k.duration, delay: p = k.delay, endDelay: g = k.endDelay, repeat: h = k.repeat, easing: m = k.easing, persist: b = !1, direction: _, offset: M, allowWebkitAcceleration: $ = !1 } = r, P = ie(i), V = ne(t), I = it.waapi(); V && gi(i, t); let D = gt(t), xt = mi(P.values, D), U = W.get(D); return se(xt.animation, !(St(m) && xt.generator) && r.record !== !1), () => { let lt = () => { var E, Rt; return (Rt = (E = Wt.get(i, D)) !== null && E !== void 0 ? E : U?.initialValue) !== null && Rt !== void 0 ? Rt : 0 }, A = yi(wi(e), lt), We = ae(A, U); if (St(m)) { let E = m.createAnimation(A, t !== "opacity", lt, D, xt); m = E.easing, A = E.keyframes || A, l = E.duration || l } if (Gt(D) && (it.cssRegisterProperty() ? bi(D) : I = !1), V && !it.linearEasing() && (O(m) || q(m) && m.some(O)) && (I = !1), I) { U && (A = A.map(ct => B(ct) ? U.toDefaultUnit(ct) : ct)), A.length === 1 && (!it.partialKeyframes() || s) && A.unshift(lt()); let E = { delay: G.ms(p), duration: G.ms(l), endDelay: G.ms(g), easing: q(m) ? void 0 : Oe(m, l), direction: _, iterations: h + 1, fill: "both" }; c = i.animate({ [D]: A, offset: M, easing: q(m) ? m.map(ct => Oe(ct, l)) : void 0 }, E), c.finished || (c.finished = new Promise((ct, Oi) => { c.onfinish = ct, c.oncancel = Oi })); let Rt = A[A.length - 1]; c.finished.then(() => { b || (Wt.set(i, D, Rt), c.cancel()) }).catch(Ut), $ || (c.playbackRate = 1.000001) } else if (o && V) A = A.map(E => typeof E == "string" ? parseFloat(E) : E), A.length === 1 && A.unshift(parseFloat(lt())), c = new o(E => { Wt.set(i, D, We ? We(E) : E) }, A, Object.assign(Object.assign({}, r), { duration: l, easing: m })); else { let E = A[A.length - 1]; Wt.set(i, D, U && B(E) ? U.toDefaultUnit(E) : E) } return s && n(i, t, A, { duration: l, delay: p, easing: m, repeat: h, offset: M }, "motion-one"), xt.setAnimation(c), c } } var $i = (i, t) => i[t] ? Object.assign(Object.assign({}, i), i[t]) : Object.assign({}, i); function Ai(i, t) { var e; return typeof i == "string" ? t ? ((e = t[i]) !== null && e !== void 0 || (t[i] = document.querySelectorAll(i)), i = t[i]) : i = document.querySelectorAll(i) : i instanceof Element && (i = [i]), Array.from(i || []) } var sr = i => i(), jt = (i, t, e = k.duration) => new Proxy({ animations: i.map(sr).filter(Boolean), duration: e, options: t }, lr), ar = i => i.animations[0], lr = { get: (i, t) => { let e = ar(i); switch (t) { case "duration": return i.duration; case "currentTime": return G.s(e?.[t] || 0); case "playbackRate": case "playState": return e?.[t]; case "finished": return i.finished || (i.finished = Promise.all(i.animations.map(cr)).catch(Ut)), i.finished; case "stop": return () => { i.animations.forEach(r => se(r)) }; case "forEachNative": return r => { i.animations.forEach(o => r(o, i)) }; default: return typeof e?.[t] > "u" ? void 0 : () => i.animations.forEach(r => r[t]()) } }, set: (i, t, e) => { switch (t) { case "currentTime": e = G.ms(e); case "currentTime": case "playbackRate": for (let r = 0; r < i.animations.length; r++)i.animations[r][t] = e; return !0 }return !1 } }, cr = i => i.finished; function Ei(i, t, e) { return O(i) ? i(t, e) : i } function Si(i) { return function (e, r, o = {}) { e = Ai(e); let n = e.length; Pe(Boolean(n), "No valid element provided."), Pe(Boolean(r), "No keyframes defined."); let s = []; for (let c = 0; c < n; c++) { let l = e[c]; for (let p in r) { let g = $i(o, p); g.delay = Ei(g.delay, c, n); let h = _i(l, p, r[p], g, i); s.push(h) } } return jt(s, o, o.duration) } } var ze = Si(ft); var dr = 5; function Zt(i, t, e) { let r = Math.max(t - dr, 0); return Me(e - i(r), t - r) } var rt = { stiffness: 100, damping: 10, mass: 1 }; var Ti = (i = rt.stiffness, t = rt.damping, e = rt.mass) => t / (2 * Math.sqrt(i * e)); function Ci(i, t, e) { return i < t && e >= t || i > t && e <= t } var Ue = ({ stiffness: i = rt.stiffness, damping: t = rt.damping, mass: e = rt.mass, from: r = 0, to: o = 1, velocity: n = 0, restSpeed: s = 2, restDistance: c = .5 } = {}) => { n = n ? G.s(n) : 0; let l = { done: !1, hasReachedTarget: !1, current: r, target: o }, p = o - r, g = Math.sqrt(i / e) / 1e3, h = Ti(i, t, e), m; if (h < 1) { let b = g * Math.sqrt(1 - h * h); m = _ => o - Math.exp(-h * g * _) * ((-n + h * g * p) / b * Math.sin(b * _) + p * Math.cos(b * _)) } else m = b => o - Math.exp(-g * b) * (p + (-n + g * p) * b); return b => { l.current = m(b); let _ = b === 0 ? n : Zt(m, b, l.current), M = Math.abs(_) <= s, $ = Math.abs(o - l.current) <= c; return l.done = M && $, l.hasReachedTarget = Ci(r, o, l.current), l } }; var He = 10, pr = 1e4; function Be(i, t = C) { let e, r = He, o = i(0), n = [t(o.current)]; for (; !o.done && r < pr;)o = i(r), n.push(t(o.done ? o.target : o.current)), e === void 0 && o.hasReachedTarget && (e = r), r += He; let s = r - He; return n.length === 1 && n.push(o.current), { keyframes: n, duration: s / 1e3, overshootDuration: (e ?? s) / 1e3 } } function Mi(i) { return B(i) && !isNaN(i) } function Ne(i) { return Bt(i) ? parseFloat(i) : i } function ki(i) { let t = new WeakMap; return (e = {}) => { let r = new Map, o = (s = 0, c = 100, l = 0, p = !1) => { let g = `${s}-${c}-${l}-${p}`; return r.has(g) || r.set(g, i(Object.assign({ from: s, to: c, velocity: l, restSpeed: p ? .05 : 2, restDistance: p ? .01 : .5 }, e))), r.get(g) }, n = (s, c) => (t.has(s) || t.set(s, Be(s, c)), t.get(s)); return { createAnimation: (s, c = !0, l, p, g) => { let h, m, b, _ = 0, M = C, $ = s.length; if (c) { M = ae(s, p ? W.get(gt(p)) : void 0); let P = s[$ - 1]; if (b = Ne(P), $ > 1 && s[0] !== null) m = Ne(s[0]); else { let V = g?.generator; if (V) { let { animation: I, generatorStartTime: D } = g, xt = I?.startTime || D || 0, U = I?.currentTime || performance.now() - xt, lt = V(U).current; m = lt, _ = Zt(A => V(A).current, U, lt) } else l && (m = Ne(l())) } } if (Mi(m) && Mi(b)) { let P = o(m, b, _, p?.includes("scale")); h = Object.assign(Object.assign({}, n(P, M)), { easing: "linear" }), g && (g.generator = P, g.generatorStartTime = performance.now()) } return h || (h = { easing: "ease", duration: n(o(0, 100)).overshootDuration }), h } } } } var qe = ki(Ue); function hr(i, t = {}) { return jt([() => { let e = new ft(i, [0, 1], t); return e.finished.catch(() => { }), e }], t, t.duration) } function ot(i, t, e) { return (O(i) ? hr : ze)(i, t, e) } var le = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 }, ce = i => (...t) => ({ _$litDirective$: i, values: t }), Tt = class { constructor(t) { } get _$AU() { return this._$AM._$AU } _$AT(t, e, r) { this._$Ct = t, this._$AM = e, this._$Ci = r } _$AS(t, e) { return this.update(t, e) } update(t, e) { return this.render(...e) } }; var j = ce(class extends Tt { constructor(i) { var t; if (super(i), i.type !== le.ATTRIBUTE || i.name !== "class" || ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.") } render(i) { return " " + Object.keys(i).filter(t => i[t]).join(" ") + " " } update(i, [t]) { var e, r; if (this.nt === void 0) { this.nt = new Set, i.strings !== void 0 && (this.st = new Set(i.strings.join(" ").split(/\s/).filter(n => n !== ""))); for (let n in t) t[n] && !(!((e = this.st) === null || e === void 0) && e.has(n)) && this.nt.add(n); return this.render(t) } let o = i.element.classList; this.nt.forEach(n => { n in t || (o.remove(n), this.nt.delete(n)) }); for (let n in t) { let s = !!t[n]; s === this.nt.has(n) || !((r = this.st) === null || r === void 0) && r.has(n) || (s ? (o.add(n), this.nt.add(n)) : (o.remove(n), this.nt.delete(n))) } return H } }); var vt = ce(class extends Tt { constructor(i) { var t; if (super(i), i.type !== le.ATTRIBUTE || i.name !== "style" || ((t = i.strings) === null || t === void 0 ? void 0 : t.length) > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.") } render(i) { return Object.keys(i).reduce((t, e) => { let r = i[e]; return r == null ? t : t + `${e = e.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${r};` }, "") } update(i, [t]) { let { style: e } = i.element; if (this.vt === void 0) { this.vt = new Set; for (let r in t) this.vt.add(r); return this.render(t) } this.vt.forEach(r => { t[r] == null && (this.vt.delete(r), r.includes("-") ? e.removeProperty(r) : e[r] = "") }); for (let r in t) { let o = t[r]; o != null && (this.vt.add(r), r.includes("-") ? e.setProperty(r, o) : e[r] = o) } return H } }); var Y = class extends f {
    render() {
      if (!this._imageDisplay) return d``; let e = { width: `${this._width || 0}px`, height: `${this._height || 0}px` }, r = { top: `-${this._top || 0}px`, left: `-${this._left || 0}px` }; return d`
    <div id="container" style="${vt(e)}">
      <img src="${this._imageDisplay.imageUrl}" style="${vt(r)}">
    </div>
      `} get image() { return this._imageDisplay } set image(e) { this._imageDisplay = e, this._refresh() } get dimensions() { return { width: this._width || 0, height: this._height || 0 } } _refresh() { if (this._imageDisplay) { let { width: e, height: r } = this._imageDisplay.dimensions || { width: 0, height: 0 }, o = this._imageDisplay.clipping; if (o && e && r) { r = Math.max(0, r - (o.top || 0)), e = Math.max(0, e - (o.left || 0)); let n = o.aspectRatio, s = o.width, c = o.height; s && c ? (e = s, r = c) : s ? (e = s, n && (r = s / n)) : c ? (r = c, n && (e = c * n)) : n && r && (e / r > n ? e = r * n : r = e / n) } this._width = e, this._height = r, this._top = (o == null ? void 0 : o.top) || 0, this._left = (o == null ? void 0 : o.left) || 0 } this.requestUpdate() }
  }; Y.styles = [f.styles, v`
    :host {
      display: block;
    }
    #container {
      position: relative;
      overflow: hidden;
    }
    #container img {
      display: block;
      position: absolute;
    }
    `], a([y()], Y.prototype, "_width", 2), a([y()], Y.prototype, "_height", 2), a([y()], Y.prototype, "_top", 2), a([y()], Y.prototype, "_left", 2), Y = a([x("nv-home-cropped-image")], Y); var nt = class extends f {
    render() {
      return d`
      <nv-home-cropped-image .image="${this.image}"></nv-home-cropped-image>
    `} updated() { if (this.image) { let e = 1, { width: r, height: o } = this._croppedImage.dimensions; if (r && o) { if (this.maxDimensions) { let [n, s] = this.maxDimensions; r > n && (e = n / r), r = n, o = Math.min(s, o * e) } } else r = 0, o = 0; this._croppedImage.style.transform = e === 1 ? "" : `scale(${e})`, this.style.width = `${r}px`, this.style.height = `${o}px` } else this.style.width = "0px", this.style.height = "0px" }
  }; nt.styles = [f.styles, v`
    :host {
      display: block;
      overflow: hidden;
      position: relative;
      margin: 0 auto;
    }
    nv-home-cropped-image {
      position: absolute;
      top: 0;
      left: 0;
      transform-origin: top left;
    }
    `], a([y()], nt.prototype, "image", 2), a([y()], nt.prototype, "maxDimensions", 2), a([T("nv-home-cropped-image")], nt.prototype, "_croppedImage", 2), nt = a([x("nv-home-scaled-image")], nt); var ur = [308, 600], Ri = [210, Number.MAX_SAFE_INTEGER], Pi = [308, Number.MAX_SAFE_INTEGER], Z = class extends f {
    constructor() { super(...arguments); this._scrolledToTop = !0; this._preventTitle = !1 } render() {
      if (!this.data) return d``; let e = this.aspectRatio && this.aspectRatio >= 1, r; return this.data.scrollable && this.aspectRatio && (r = (e ? Pi[0] : Ri[0]) / this.aspectRatio), d`
    <div id="outerContainer" class="${this._preventTitle ? "prevent-title" : ""}">
      <div id="container" class="${this.data.scrollable ? "scrollable" : ""}" style="${r ? `max-height: ${r}px;` : ""}" @scroll="${this._onScroll}">
        <nv-home-scaled-image 
          .maxDimensions="${this.data.scrollable ? e ? Pi : Ri : ur}" 
          .image="${this.data.image}"></nv-home-scaled-image>
      </div>
      ${this.data.message ? d`<div id="title">${this.data.message}</div>` : null}
    </div>
    `} onPreview() { this._container && (this._container.scrollTop = 0, this._scrolledToTop = !0) } _onScroll() { var e; this._container && this._scrolledToTop && (this._scrolledToTop = this._container.scrollTop <= 1), (e = this.data) != null && e.scrollable && (this._preventTitleTimer && clearTimeout(this._preventTitleTimer), this._preventTitle = !0, this._preventTitleTimer = window.setTimeout(() => { this._preventTitle = !1 }, 1e3)) } async animateCard() { if (this._container) { let e = (this._container.scrollHeight - this._container.getBoundingClientRect().height) * .6; return new Promise(r => { let o = 0, n = () => { requestAnimationFrame(s => { o || (o = s); let c = (s - o) / 3e3, l = c <= .5 ? c * e : (1 - c) * e; this._container.scrollTop = l, c >= 1 ? r() : n() }) }; window.setTimeout(() => n(), 1e3) }) } }
  }; Z.styles = [f.styles, v`
    :host {
      display: block;
      padding: 6px;
    }
    #outerContainer {
      position: relative;
    }
    #container {
      position: relative;
    }
    nv-home-scaled-image {
      border-radius: 6px;
    }
    #title {
      border-radius: 0 0 6px 6px;
      position: absolute;
      font-size:  var(--navu-image-card-font-size, 14px);
      background: rgba(255,255,255,1);
      left: 0;
      width: 100%;
      bottom: 0;
      padding: 10px 8px;
      transform: translateY(100%);
      opacity: 0;
      transition: transform 0.3s ease-in-out, opacity 0.3s ease-out;
      pointer-events: none;
      border-top: 1px solid rgba(0,0,0,0.1);
    }
    #outerContainer:hover #title {
      transform: translateY(0);
      opacity: 1;
    }
    #outerContainer.prevent-title:hover #title {
      transform: translateY(100%);
      opacity: 0;
    }
    #container.scrollable {
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      max-height: 350px;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
    #container::-webkit-scrollbar {
      width: 0px;
      height: 0px;
      background: transparent;
    }
    `], a([y()], Z.prototype, "data", 2), a([y()], Z.prototype, "aspectRatio", 2), a([y()], Z.prototype, "_scrolledToTop", 2), a([y()], Z.prototype, "_preventTitle", 2), a([T("#container")], Z.prototype, "_container", 2), Z = a([x("navu-home-image-action-card")], Z); var mr = [300, 450], Li = async i => new Promise(t => setTimeout(t, i)), bt = class extends f {
    render() {
      return this.data ? d`
    <div id="container">
      <div id="imagePanel" class="horiz center2">
        <nv-home-scaled-image .maxDimensions="${mr}" .image="${this.data.image}"></nv-home-scaled-image>
      </div>
      <div id="textPanel">
        ${this.data.title ? d`<div id="title">${this.data.title}</div>` : null}
        ${this.data.description ? d`<div id="description">${this.data.description}</div>` : null}
      </div>
    </div>
    `: d``
    } async animateCard() { this._image && (await Li(500), this._image.style.transform = "scale(1.2)", await Li(1e3), this._image.style.transform = "scale(1)") }
  }; bt.styles = [f.styles, v`
    :host {
      display: block;
      padding: 6px;
    }
    #container {
      position: relative;
    }
    #imagePanel {
      min-width: 200px;
      overflow: hidden;
      border-radius: 6px;
    }
    nv-home-scaled-image {
      border-radius: 6px;
      transition: transform 0.6s ease-in-out;
    }
    #title {
      font-size: var(--navu-page-card-title-size, 16px);
      color: #000;
    }
    #description {
      padding: 0 2px;
      font-size: var(--navu-page-card-description-size, 13px);
      color: #808080;
    }
    #textPanel {
      padding: 6px 4px;
    }
    `], a([y()], bt.prototype, "data", 2), a([T("nv-home-scaled-image")], bt.prototype, "_image", 2), bt = a([x("navu-home-page-action-card")], bt); var fr = async i => new Promise(t => setTimeout(t, i)), Ct = class extends f {
    render() {
      var e; return this.data ? d`
    <div id="container">
      <div id="imagePanel" class="horiz center2">
        <video width="300" playsinline muted autoplay loop src="${((e = this.data.image) == null ? void 0 : e.imageUrl) || ""}"></video>
      </div>
      ${this.data.message ? d`<div id="textPanel">${this.data.message}</div>` : null}
    </div>
    `: d``
    } async animateCard() { await fr(3e3) }
  }; Ct.styles = [f.styles, v`
    :host {
      display: block;
      padding: 6px;
    }
    #container {
      position: relative;
    }
    #imagePanel {
      min-width: 200px;
      overflow: hidden;
      border-radius: 6px;
      position: relative;
    }
    #textPanel {
      padding: 6px 4px;
      font-size: 16px;
      color: #000;
      line-height: 18px;
    }
    `], a([y()], Ct.prototype, "data", 2), Ct = a([x("navu-home-video-action-card")], Ct); var z = class extends f {
    constructor() { super(...arguments); this.type = "text"; this.disabled = !1; this.dense = !1; this.rounded = !1; this.trailingIcon = !1 } render() {
      let e = { bounded: this.type !== "text", elevated: this.type === "elevated" || this.type === "solid", filled: this.type === "filled" || this.type === "solid", tonal: this.type === "tonal" || this.type === "elevated", icon: !!this.icon, trailingicon: !!(this.icon && this.trailingIcon) }; return d`
    <button ?disabled="${this.disabled}" class="horiz center2 ${j(e)}">
      ${this.icon ? d`<nv-home-icon .icon="${this.icon}"></nv-home-icon>` : null}
      <slot></slot>
    </button>
    `} focus() { var e; (e = this._b) == null || e.focus() } blur() { var e; (e = this._b) == null || e.blur() }
  }; z.styles = [f.styles, v`
      :host {
        display: inline-block;
        vertical-align: top;
        text-transform: uppercase;
        font-size: 14px;
        min-width: 64px;
        color: var(--nv-primary, #6200ee);
      }
      button {
        cursor: pointer;
        outline: none;
        border-radius: 4px;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: center;
        font-size: inherit;
        letter-spacing: 1.25px;
        line-height: 1;
        padding: 0 12px;
        min-height: 40px;
        text-transform: inherit;
        width: 100%;
        background: none;
        border: none;
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
        pointer-events: none;
      }
      button::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentcolor;
        opacity: 0;
        pointer-events: none;
        transform: scale(0);
        transition: opacity 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.4s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      button:focus::before {
        opacity: 0.1;
      }
      button:active::after {
        opacity: 0.1;
        transform: scale(1);
        transition: opacity 0.28s cubic-bezier(0.4, 0.0, 0.2, 1), transform 0.28s cubic-bezier(0.4, 0.0, 0.2, 1);
      }
      nv-icon {
        width: var(--nv-home-button-icon-size, 18px);
        height: var(--nv-home-button-icon-size, 18px);
        margin-inline-end: var(--nv-home-button-icon-end-margin, 8px);
        flex-shrink: 0;
      }
      button.icon {
        padding: 0 16px 0 12px;
      }
      button.trailingicon {
        padding: 0 12px 0 16px;
      }
      button.horiz.trailingicon {
        flex-direction: row-reverse;
      }
      button.trailingicon nv-icon {
        margin-inline-end: 0;
        margin-inline-start: 8px;
      }

      :host([rounded]) button {
        border-radius: 40px;
      }
      :host([dense]) button {
        min-height: 32px;
      }
      :host([disabled]) button {
        color: var(--nv-disabled-color, rgba(0, 0, 0, 0.38));
        cursor: initial;
        pointer-events: none;
      }

      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
        button:focus:hover::before {
          opacity: 0.1;
        }
      }
    `, v`
    button.bounded {
      padding: 0 24px;
    }
    button.bounded.icon {
      padding-inline-start: 16px;
    }
    button.bounded.icon.trailingicon {
      padding-inline-start: 24px;
      padding-inline-end: 16px;
    }
    button.elevated {
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      transition: box-shadow 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);
    }
    button.elevated:active {
      box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);
    }

    button.filled {
      background: currentColor;
      border: none;
    }
    button.filled > * {
      color: var(--nv-on-primary, #ffffff)
    }
    button.filled::before {
      background: var(--nv-on-primary, #ffffff);
    }
    button.filled::after {
      background: var(--nv-on-primary, #ffffff);
    }
    button.filled:focus::before {
      opacity: 0.2;
    }
    button.filled:active::after {
      opacity: 0.2;
    }

    button.tonal {
      background: var(--nv-secondary-container, #ffffff);
      border: none;
    }
    button.tonal > * {
      color: var(--nv-on-secondary-container, currentColor);
    }
    button.tonal::before {
      background: var(--nv-on-secondary-container, currentColor);
    }
    button.tonal::after {
      background: var(--nv-on-secondary-container, currentColor);
    }

    :host([disabled]) button.tonal,
    :host([disabled]) button.filled {
      background-color: var(--nv-disabled-color, rgba(0, 0, 0, 0.12));
      box-shadow: none;
    }
    :host([disabled]) button.tonal > *,
    :host([disabled]) button.filled > * {
      color: var(--nv-disabled-text-color, rgba(0, 0, 0, 0.38));
    }

    :host([type="outlined"]) button {
      background: none;
      border: 1px solid;
      border-color: var(--nv-home-button-outline-color, currentColor);
    }

    @media (hover: hover) {
      button.filled:hover::before {
        opacity: 0.1;
      }
      button.filled:focus:hover::before {
        opacity: 0.2;
      }
    }
    `], a([u({ reflect: !0 })], z.prototype, "type", 2), a([u({ type: Boolean, reflect: !0 })], z.prototype, "disabled", 2), a([u({ type: Boolean, reflect: !0 })], z.prototype, "dense", 2), a([u({ type: Boolean, reflect: !0 })], z.prototype, "rounded", 2), a([u()], z.prototype, "icon", 2), a([u({ type: Boolean, attribute: "trailing-icon" })], z.prototype, "trailingIcon", 2), a([T("button")], z.prototype, "_b", 2), z = a([x("nv-home-button")], z); var Mt = i => i ?? S; var w = class extends f {
    constructor() { super(...arguments); this.disabled = !1; this.outlined = !1; this.type = "text"; this.label = ""; this.placeholder = ""; this.helper = ""; this.prefix = ""; this.suffix = ""; this.autocomplete = ""; this.persistentHelper = !1; this.showCounter = !1; this.endAlign = !1; this._focused = !1; this._hasText = !1; this._currentLength = 0 } get value() { return this._input ? this._input.value : this._pendingValue !== void 0 ? this._pendingValue : "" } set value(e) { this._input ? (this._input.value = e, this._onInput()) : this._pendingValue = e } render() {
      let e = { focused: this._focused, nolabel: !this.label, notched: !!(this.label && (this._focused || this._hasText)), leadingicon: !!this.icon, trailingicon: !!this.trailingIcon, hastext: this._hasText, outlined: this.outlined }, r = { focused: this._focused, persistent: this.persistentHelper }, o = { endalign: this.endAlign }, n = this.maxlength && this.showCounter, s = this.helper || n; return d`
    <label class="horiz center ${j(e)}">
      ${this.label ? d`<span id="label" class="textlabel">${this.label}</span>` : null}
      ${this.icon ? d`<nv-home-icon id="leadingIcon" .icon="${this.icon}"></nv-home-icon>` : null}
      ${this.prefix && !this.icon ? d`<span id="prefix">${this.prefix}</span>` : null}

      <input 
        class="${j(o)}"
        name="${Mt(this.name)}"
        type="${this.type}"
        ?disabled="${this.disabled}"
        autocomplete="${this.autocomplete}"
        placeholder="${this.placeholder}"
        maxlength="${Mt(this.maxlength)}"
        aria-labelledby="label"
        min="${Mt(this.min)}"
        max="${Mt(this.max)}"
        step="${Mt(this.step)}"
        @change=${this._onChange}
        @input=${this._onInput}
        @focus=${this._onFocus}
        @blur=${this._onBlur}>

      ${this.suffix && !this.trailingIcon ? d`<span id="suffix">${this.suffix}</span>` : null}
      
      ${this.outlined ? d`
        <div id="outlineBorder" class="horiz">
          <span id="obleft"></span>
          
          ${this.label ? d`
          <div id="obcenter">
            <span id="oblabel" class="textlabel">${this.label}</span>
          </div>
          `: null}
          
          <span id="obright" class="flex"></span>
        </div>
        `: d`<span id="border"></span>`}
      
      ${this.trailingIcon ? d`<nv-home-icon id="trailingIcon" .icon="${this.trailingIcon}" @click="${this._trailingIconCLick}"></nv-home-icon>` : null}
    </label>
    
    ${s ? d`
    <div id="helperBar" class="horiz center ${j(r)}">
      <span id="helperText" class="flex">${this.helper}</span>
      ${n ? d`
        <div id="counter">
          <span>${this._currentLength} / ${this.maxlength}</span>
        </div>
      `: null}
    </div>
    `: null}
    `} firstUpdated() { this._pendingValue && (this._input.value = this._pendingValue, this._pendingValue = void 0, this._onInput()) } focus() { var e; (e = this._input) == null || e.focus() } blur() { var e; (e = this._input) == null || e.blur() } _onFocus() { this._focused = !0 } _onBlur() { this._focused = !1 } _onChange(e) { e.stopPropagation(), this.fire("change") } _onInput(e) { this._hasText = !!this._input.value, this.showCounter && (this._currentLength = (this._input.value || "").length), e && e.stopPropagation(), this.fire("input") } _trailingIconCLick(e) { e.stopPropagation(), this.fire("trailing-icon-click") }
  }; w.styles = [f.styles, v`
      :host {
        display: inline-flex;
        vertical-align: top;
        flex-direction: column;
        width: 280px;
        font-size: 1rem;
      }
      :host([disabled]) label {
        pointer-events: none;
        opacity: 0.38;
      }
      :host([disabled]) #helperBar {
        pointer-events: none;
        opacity: 0.38;
      }

      label {
        display: block;
        width: 100%;
        padding: 20px 16px 8px;
        height: 56px;
        position: relative;
        border-radius: 0;
        border-top-left-radius: var(--nv-home-textfield-border-radius, 4px);
        border-top-right-radius: var(--nv-home-textfield-border-radius, 4px);
        overflow: hidden;
      }
      label::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--nv-home-textfield-background, currentColor);
        opacity: 0.04;
        pointer-events: none;
        transition: opacity 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      label.nolabel {
        padding-top: 0;
        padding-bottom: 0;
      }
      label.nolabel input {
        height: 100%;
      }
      label.nolabel input::placeholder {
        opacity: 0.7;
      }
      label.leadingicon {
        padding-left: 44px;
      }
      label.leadingicon #label {
        max-width: calc(100% - 44px);
        left: 44px;
      }
      label.trailingicon {
        padding-right: 44px;
      }
      label.focused #border::after {
        opacity: 1;
        transform: scaleX(1);
      }
      label.focused input::placeholder {
        opacity: 0.7;
      }
      label.focused #label {
        color: var(--nv-primary, #6200ee);
        opacity: 1;
      }
      label.focused #leadingIcon {
        color: var(--nv-primary, #6200ee);
      }
      label.notched #label {
        transform: translateY(-106%) scale(0.75);
      }
      label.focused #prefix,
      label.hastext #prefix,
      label.notched #prefix {
        opacity: 0.6;
      }
      label.focused #suffix,
      label.hastext #suffix,
      label.notched #suffix {
        opacity: 0.6;
      }

      #leadingIcon {
        position: absolute;
        left: 12px;
        top: 50%;
        pointer-events: none;
        transform: translateY(-50%);
        color: var(--nv-leading-icon-color, rgba(0, 0, 0, 0.54));
      }
      #trailingIcon {
        position: absolute;
        right: 0;
        top: 50%;
        padding: 10px 12px 10px 8px;
        width: 44px;
        height: 44px;
        transform: translateY(-50%);
        color: var(--nv-trailing-icon-color, rgba(0, 0, 0, 0.54));
      }

      input {
        color: inherit;
        border: none;
        display: block;
        width: 100%;
        font-family: inherit;
        font-size: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
        text-transform: inherit;
        margin: 0;
        padding: 0;
        appearance: none;
        background-color: transparent;
        caret-color: var(--nv-primary, #6200ee);
        border-radius: 0;
        outline: none;
        height: 28px;
      }
      input[type=number]::-webkit-inner-spin-button, 
      input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
      }
      input[type=number] {
        -moz-appearance: textfield;
      }
      input:disabled {
        background: inherit;
      }
      input::placeholder {
        transition: opacity 67ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        opacity: 0;
      }
      input.endalign {
        text-align: right;
      }
      #border {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 0;
        height: 1px;
        background-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.42));
        pointer-events: none;
      }
      #border::after {
        position: absolute;
        left: 0px;
        bottom: 0px;
        width: 100%;
        height: 2px;
        content: "";
        background-color: var(--nv-primary, #6200ee);
        opacity: 0;
        transform: scaleX(0);
        transition: transform 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s, opacity 180ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      .textlabel {
        font-family: var(--nv-label-font-family, inherit);
        font-size: var(--nv-label-font-size, inherit);
        font-weight: var(--nv-label-font-weight, inherit);
        letter-spacing: var(--nv-label-letter-spacing, inherit);
        text-transform: var(--nv-label-text-transform, inherit);
        white-space: nowrap;
        line-height: var(--nv-label-text-line-height, 1.15);
        text-align: left;
      }
      #label {
        position: absolute;
        top: 50%;
        left: 16px;
        transform: translateY(-50%);
        pointer-events: none;
        color: inherit;
        opacity: 0.6;
        transform-origin: left top;
        text-overflow: ellipsis;
        cursor: text;
        overflow: hidden;
        will-change: transform;
        transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s, color 150ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
      }
      #helperBar {
        padding: 4px 16px 0;
        font-size: 0.75em;
        letter-spacing: 0.0333333em;
        font-family: var(--nv-caption-font-family, inherit);
        text-transform: var(--nv-caption-text-transform);
        line-height: normal;
        user-select: none;
        opacity: 0.6;
      }
      #helperText {
        opacity: 0;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      }
      #helperBar.focused #helperText {
        opacity: 1;
      }
      #helperBar.persistent #helperText {
        opacity: 1;
      }
      #counter {
        margin-left: 16px;
      }
      #prefix {
        margin: 0 2px 0 0;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        opacity: 0;
        white-space: nowrap;
      }
      #suffix {
        margin: 0 0 0 2px;
        transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
        opacity: 0;
        white-space: nowrap;
      }

      @media (hover: hover) {
        label:hover::before {
          opacity: 0.08;
        }
        label:hover #border {
          background-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.6));
        }
      }
    `, v`
    label.outlined {
      padding-top: 0;
      padding-bottom: 0;
      border-radius: var(--nv-home-textfield-border-radius, 4px);
      overflow: initial;
    }
    label.outlined::before {
      content: none;
    }
    label.notched.outlined #label {
      transform: translateY(-37.25px) scale(0.75);
    }
    label.notched.outlined.leadingicon #label {
      transform: translateY(-37.25px) translateX(-28px) scale(0.75);
    }
    

    label.outlined #label {
      text-overflow: clip;
      transform-origin: left center;
    }

    #outlineBorder {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
    }
    #obleft {
      width: 12px;
      border-radius: var(--nv-home-textfield-border-radius, 4px) 0 0 var(--nv-home-textfield-border-radius, 4px);
      border-left: 1px solid;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.42));
    }
    #obright {
      border-radius: 0 var(--nv-home-textfield-border-radius, 4px) var(--nv-home-textfield-border-radius, 4px) 0;
      border-right: 1px solid;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.42));
    }
    #obcenter {
      padding: 0 4px;
      border-top: 1px solid;
      border-bottom: 1px solid;
      border-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.42));
    }
    #oblabel {
      font-size: 0.75em;
      transform: translateY(-50%);
      display: block;
      opacity: 0;
    }
    label.focused #obleft,
    label.focused #obcenter,
    label.focused #obright {
      border-color: var(--nv-primary, #6200ee);
      border-width: 2px;
    }
    label.notched #obcenter {
      border-top: none;
    }
    

    @media (hover: hover) {
      label:hover #obright,
      label:hover #obcenter,
      label:hover #obleft {
        border-color: var(--nv-home-textfield-line-color, rgba(0, 0, 0, 0.6));
      }
      label.focused:hover #obright,
      label.focused:hover #obcenter,
      label.focused:hover #obleft {
        border-color: var(--nv-primary, #6200ee);
      }
    }
    `], a([u({ type: Boolean, reflect: !0 })], w.prototype, "disabled", 2), a([u({ type: Boolean, reflect: !0 })], w.prototype, "outlined", 2), a([u({ type: String, reflect: !0 })], w.prototype, "type", 2), a([u()], w.prototype, "label", 2), a([u()], w.prototype, "placeholder", 2), a([u()], w.prototype, "helper", 2), a([u()], w.prototype, "prefix", 2), a([u()], w.prototype, "suffix", 2), a([u()], w.prototype, "name", 2), a([u()], w.prototype, "icon", 2), a([u({ attribute: "trailing-icon" })], w.prototype, "trailingIcon", 2), a([u()], w.prototype, "autocomplete", 2), a([u({ type: Boolean, attribute: "persistent-helper" })], w.prototype, "persistentHelper", 2), a([u({ type: Number })], w.prototype, "maxlength", 2), a([u({ type: Boolean, attribute: "show-counter" })], w.prototype, "showCounter", 2), a([u({ type: Boolean, attribute: "end-align" })], w.prototype, "endAlign", 2), a([u({ type: Number })], w.prototype, "min", 2), a([u({ type: Number })], w.prototype, "max", 2), a([u({ type: Number })], w.prototype, "step", 2), a([y()], w.prototype, "_focused", 2), a([y()], w.prototype, "_hasText", 2), a([y()], w.prototype, "_currentLength", 2), a([T("input")], w.prototype, "_input", 2), a([u()], w.prototype, "value", 1), w = a([x("nv-home-textfield")], w); var st = class extends f {
    constructor() { super(...arguments); this._formSubmitted = !1; this._animating = !1 } render() {
      return this.data ? d`
    <div id="container">
      <div ?hidden="${this._formSubmitted}">
        ${this.data.message ? d`<div id="message">${this.data.message}</div>` : ""}
        <div id="form" role="form">
          ${(this.data.fields || []).map(e => d`
            <nv-home-textfield autocomplete="off" .name="${e}" outlined label="${this._getFieldLabel(e)}"></nv-home-textfield>
          `)}
          <div id="buttonPanel">
            <nv-home-button type="filled">${this.data.buttonText || "Submit"}</nv-home-button>
          </div>
        </div>
      </div>
      <div id="thanksPanel" ?hidden="${!this._formSubmitted}">
        <div>${this.data.thanksMessage || "Thank you!"}</div>
      </div>
    </div>
    `: d``
    } _getFieldLabel(e) { switch (e) { case "email": return "Email"; case "name": return "Your name"; case "company": return "Company name" }return "" } onPreview() { this._textields && Array.from(this._textields).forEach(e => e.value = "") } async animateCard() { if (this._animating) return; let e = this._textields[0], r = this._textields[1]; if (e && r) { let o = "Sally from Sales", n = "sally@example.com", s = 0, c = 0; return this._animating = !0, new Promise(l => { let p = () => { if (s <= o.length) e.value = o.substring(0, s), s++; else if (c <= n.length) r.value = n.substring(0, c), c++; else { this._animating = !1, l(); return } setTimeout(() => { p() }, 50) }; window.setTimeout(() => p(), 500) }) } }
  }; st.styles = [f.styles, v`
    :host {
      display: block;
      padding: 16px;
      font-size: var(--navu-form-card-font-size, 16px);
      --nv-primary: #ab47bc;
    }
    #container {
      position: relative;
      width: 280px;
    }
    #message {
      margin-bottom: 16px;
    }
    nv-home-button,
    nv-home-textfield {
      display: block;
      width: 100%;
    }
    nv-home-textfield:not(:first-child) {
      margin-top: 16px;
    }
    #buttonPanel {
      padding-top: 16px;
    }
    #thanksPanel {
      text-align: center;
    }
    `], a([y()], st.prototype, "data", 2), a([y()], st.prototype, "_formSubmitted", 2), a([Qt("nv-home-textfield")], st.prototype, "_textields", 2), st = a([x("navu-home-form-action-card")], st); var X = class extends f {
    constructor() { super(...arguments); this._previewing = !1 } render() {
      if (!this.data) return d``; let e, r = !1, o = !1; switch (this.data.icon) { case "filled-dot": r = !0, o = !0; break; case "unfilled-dot": r = !1, o = !0; break; case "unfilled-square": r = !1; break; case "filled-square": r = !0; break; default: r = !1, e = this.data.icon; break }let n = { visited: r, rounded: o, previewing: this._previewing, hasicon: !!e }; return d`
    <div id="container">
      <button class="${j(n)}">
        ${e ? d`<nv-home-icon icon="${e}"></nv-home-icon>` : d`<div id="dot"></div>`}
      </button>
      <div id="card" class="type-${this.data.card.type}">
        ${this._renderCard()}
      </div>
    </div>
    `} _renderCard() { var e, r, o; if (this.data) switch (this.data.card.type) { case "image": { let n = (r = (e = this.data.card.image) == null ? void 0 : e.clipping) == null ? void 0 : r.aspectRatio; return this.data.card.scrollable && ((o = this.data.card.image) != null && o.clipping) && (this.data.card.image.clipping.aspectRatio = void 0), d`<navu-home-image-action-card class="action-card" .aspectRatio="${n}" .data="${this.data.card}"></navu-home-image-action-card>` } case "facebook-share": return d`<navu-home-page-action-card class="action-card" .data="${this.data.card}"></navu-home-page-action-card>`; case "linked-video": return d`<navu-home-video-action-card class="action-card" .data="${this.data.card}"></navu-home-video-action-card>`; case "form": return d`<navu-home-form-action-card class="action-card" .data="${this.data.card}"></navu-home-form-action-card>`; default: break }return d`` } firstUpdated() { this._card && ot(this._card, { opacity: 0, scale: .6, pointerEvents: "none" }, { easing: "linear", duration: 0 }) } async collapse() { var e; this._previewing && (this._previewing = !1, this._card && await ot(this._card, { opacity: 0, scale: .6, pointerEvents: "none" }, { easing: "ease-in", duration: .15 }).finished, (e = this._actionCard) != null && e.onEndPreview && this._actionCard.onEndPreview()) } async expand() { var e; this._card && (this._previewing = !0, (e = this._actionCard) != null && e.onPreview && this._actionCard.onPreview(), await ot(this._card, { opacity: 1, scale: 1 }, { easing: qe() }).finished) } async animateCard() { var e; (e = this._actionCard) != null && e.animateCard && await this._actionCard.animateCard() }
  }; X.styles = [f.styles, v`
    :host {
      display: block;
    }
    #container {
      position: relative;
    }
    button {
      background: none;
      border: none;
      display: block;
      padding: 12px 10px;
    }
    button.hasicon {
      padding: 8px 6px;
    }
    #dot {
      width: 12px;
      height: 12px;
      border: 2px solid var(--navu-site-highlight-color, #0277BD);
      transition: transform 0.3s ease-in-out 0s;
    }
    nv-home-icon {
      width: 20px;
      height: 20px;
      color: var(--navu-site-highlight-color, #0277BD);
      transition: transform 0.3s ease-in-out 0s;
    }
    button.rounded #dot {
      border-radius: 50%;
    }
    button.visited #dot {
      background: var(--navu-site-highlight-color, #0277BD);
    }
    button.previewing #dot {
      transform: scale(1.5);
    }
    button.previewing nv-home-icon {
      transform: scale(1.3);
    }
    #card {
      display: block;
      position: absolute;
      box-shadow: rgb(0 0 0 / 20%) 0px 3px 5px -1px, rgb(0 0 0 / 14%) 0px 6px 10px 0px, rgb(0 0 0 / 12%) 0px 1px 18px 0px;
      border-radius: 10px;
      overflow: hidden;
      background:  var(--navu-action-card-background, white);
      opacity: 0;
      pointer-events: none;
      transform-origin: left bottom;
      bottom: calc(100% + 16px);
      left: 0px;
      z-index: 9999;
      margin: 0px;
      transform: scale(0.6);
    }
    #card.type-image {
      left: -41px;
    }
    #card.type-facebook-share {
      left: -124px;
    }
    #card.type-linked-video {
      left: -156px;
    }
    #card.type-form {
      left: -188px;
    }
    `], a([y()], X.prototype, "data", 2), a([y()], X.prototype, "_previewing", 2), a([T("#card")], X.prototype, "_card", 2), a([T(".action-card")], X.prototype, "_actionCard", 2), X = a([x("navu-home-action-item")], X); var gr = { triggerSettings: {}, actions: [{ id: "1", icon: "filled-dot", card: { type: "image", image: { imageUrl: "/assets/images/navu-demo-scroll.png", fileId: null, dimensions: { width: 353, height: 1679 } }, scrollable: !0 } }, { id: "2", icon: "unfilled-dot", card: { type: "facebook-share", image: { imageUrl: "/assets/images/navu-demo-page.png", fileId: null, dimensions: { width: 400, height: 295 } }, title: "Billing Backend Gets an Upgrade", description: "We're happy to announce a significant upgrade to our billing system, which should better address the needs of our users." } }, { id: "3", icon: "unfilled-dot", card: { type: "linked-video", image: { imageUrl: "/assets/images/home-demo-video.mp4", fileId: null, dimensions: { width: 500, height: 262 } }, message: "Product update: Everything you need to know about the new release." } }, { id: "4", icon: "unfilled-dot", card: { type: "form", message: "Sign up to download our e-book", fields: ["name", "email"], buttonText: "Download" } }], extraActions: [] }, vr = { triggerSettings: {}, actions: [{ id: "1", icon: "filled-dot", card: { type: "image", image: { imageUrl: "/assets/images/navu-demo-scroll.png", fileId: null, dimensions: { width: 353, height: 1679 } }, scrollable: !0 } }, { id: "2", icon: "unfilled-dot", card: { type: "facebook-share", image: { imageUrl: "/assets/images/navu-demo-page.png", fileId: null, dimensions: { width: 400, height: 295 } }, title: "Billing Backend Gets an Upgrade", description: "We're happy to announce a significant upgrade to our billing system, which should better address the needs of our users." } }, { id: "3", icon: "unfilled-dot", card: { type: "linked-video", image: { imageUrl: "/assets/images/home-demo-video.mp4", fileId: null, dimensions: { width: 500, height: 262 } }, message: "Product update: Everything you need to know about the new release." } }, { id: "4", icon: "unfilled-dot", card: { type: "form", message: "Sign up to download our e-book", fields: ["name", "email"], buttonText: "Download" } }, { id: "5", icon: "unfilled-dot", card: { type: "image", image: { imageUrl: "/assets/images/navu-demo-scroll.png", fileId: null, dimensions: { width: 353, height: 1679 } }, scrollable: !0 } }], extraActions: [] }, F = class extends f {
    constructor() { super(...arguments); this.source = "default"; this._barExpanded = !1; this._collapsedItemsCount = 0; this._metaItemsCount = 0 } render() {
      let e = this.source === "default" ? gr : vr, r = [], o = [], n = e.extraActions || []; for (let s of e.actions) s.collapsible ? o.push(s) : r.push(s); return this._collapsedItemsCount = o.length + n.length, this._metaItemsCount = n.length, d`
    <div id="bar" class="horiz ${this._barExpanded ? "expanded" : ""}" 
      @preview="${this._onPreview}">

      ${r.map(s => d`<navu-home-action-item .data="${s}"></navu-home-action-item>`)}
      
      ${this._collapsedItemsCount ? d`
        <div id="ellipses" class="horiz center2">
          <nv-home-icon icon="more-horiz"></nv-home-icon>
        </div>`: null}
      <div id="otherDots">
        ${this._collapsedItemsCount ? d`
        <div id="otherDotsInner" class="horiz">
          ${o.map(s => d`<navu-home-action-item .data="${s}"></navu-home-action-item>`)}
          ${n.length ? d`
            <div class="actionsDivider"></div>
            ${n.map(s => d`<navu-home-action-item .data="${s}"></navu-home-action-item>`)}
          `: null}
        </div>
        `: null}
      </div>
    </div>
    `} firstUpdated() { setTimeout(() => { this._bar.style.opacity = "1" }, 600), this.addEventListener("click", e => { e.stopPropagation() }) } async _onPreview(e) { let r = e.target; r && await this._previewCard(r) } async _previewCard(e) { this._previewing !== e && (this._previewing && this._previewing.collapse(), this._previewing = e, this._setBarExapanded(!0), await e.expand()) } async _setBarExapanded(e) { e !== this._barExpanded && (this._barExpanded = e, e ? (await ot(this._otherDots, { width: `${this._collapsedItemsCount * 32 + (this._metaItemsCount ? 13 : 0)}px` }, { easing: "ease-out", duration: .5 }).finished, this._barExpanded && (this._otherDots.style.overflow = "visible")) : (this._otherDots.style.overflow = "hidden", await ot(this._otherDots, { width: "0px" }, { easing: "ease-out", duration: .25 }).finished)) } async show(e, r = !1) { let o = Array.from(this._allItems).find(n => { var s; return ((s = n.data) == null ? void 0 : s.id) === e }); if (o) { if (r && o === this._previewing) return; await this._previewCard(o), this._previewing && await this._previewing.animateCard() } } hideAll() { this._previewing && this._previewing.collapse(), this._previewing = void 0 }
  }; F.styles = [f.styles, v`
    :host {
      display: block;
    }
    #bar {
      background: var(--navu-actions-bar-background, white);
      border-radius: var(--navu-actions-bar-border-radius, 20px);
      padding: 0 6px;
      box-shadow: var(--navu-actions-bar-shadow, 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12));
      opacity: 0;
      transition: opacity 1s ease-in;
    }
    #otherDots {
      overflow: hidden;
      width: 0;
    }
    .actionsDivider {
      margin: 0px 6px;
      width: 1px;
      background-color: var(--navu-actions-divider-color, #e5e5e5);
      flex: 1 0 auto;
    }
    #ellipses {
      padding: 0 4px;
    }
    #ellipses nv-home-icon {
      width: 20px;
      height: 20px;
      color: var(--navu-site-highlight-color, #0277BD);
    }
    #bar.expanded #ellipses {
      display: none;
    }
    `], a([u()], F.prototype, "source", 2), a([y()], F.prototype, "_barExpanded", 2), a([T("#bar")], F.prototype, "_bar", 2), a([T("#otherDots")], F.prototype, "_otherDots", 2), a([Qt("navu-home-action-item")], F.prototype, "_allItems", 2), F = a([x("navu-home-action-widget")], F); var L = class extends f {
    constructor() { super(...arguments); this.leftedge = !1; this.rightedge = !1; this.count = 0; this.label = ""; this.caption = ""; this.bgcolor = "#fff"; this.fgcolor = "#000"; this.height = 160; this.highlighting = !1 } render() {
      let e = { "--visitor-flow-item-bg": `${this.bgcolor}`, "--visitor-flow-item-fg": `${this.fgcolor}`, height: `${this.height}px` }, r = { horiz: !0, center2: !0, "left-edge": this.leftedge, "right-edge": this.rightedge, "has-caption": !!this.caption }; return d`
    <div id="container" class="${j(r)}" style="${vt(e)}">
      <div id="labelPanel" class="${this.highlighting ? "highlight" : ""}">
        ${this.caption ? d`
          <div id="caption">${this.caption}</div>
        `: d`
          <div id="count">${this.count.toLocaleString()}</div>
          <div id="label">${this.label}</div>
        `}
      </div>
    </div>
    `}
  }; L.styles = [f.styles, v`
    :host {
      display: block;
    }
    #container {
      text-align: center;
      position: relative;
      color: var(--visitor-flow-item-fg);
      background-color: var(--visitor-flow-item-bg);
    }
    #container.has-caption {
      text-align: right;
      justify-content: flex-end;
    }
    #container.left-edge {
      border-radius: 12px 0px 0px 12px;
    }
    #container.right-edge {
      border-radius: 0 12px 12px 0;
    }
    #count {
      font-size: 16px;
    }
    #label {
      font-size: 14px;
      letter-spacing: 0.25px;
    }
    #caption {
      font-size: 12px;
      max-width: var(--visitor-flow-item-caption-max-width, 80px);
      opacity: 0.8;
    }
    #labelPanel {
      position: relative;
    }
    #labelPanel > * {
      position: relative;
    }
    #labelPanel::before {
      content: '';
      position: absolute;
      top: -8px;
      left: -8px;
      right: -8px;
      bottom: -8px;
      background-color: #fff176;
      border-radius: 4px;
      transform-origin: left center;
      transform: scaleX(0);
      opacity: 0;
      pointer-events: none;
      transition: transform 0.3s ease-in-out;
    }
    #labelPanel.highlight {
      color: var(--visitor-flow-item-highlight-fg);
    }
    #labelPanel.highlight::before {
      transform: scaleX(1);
      opacity: 1;
    }
    `], a([u({ type: Boolean })], L.prototype, "leftedge", 2), a([u({ type: Boolean })], L.prototype, "rightedge", 2), a([u({ type: Number })], L.prototype, "count", 2), a([u()], L.prototype, "label", 2), a([u()], L.prototype, "caption", 2), a([u()], L.prototype, "bgcolor", 2), a([u()], L.prototype, "fgcolor", 2), a([u({ type: Number })], L.prototype, "height", 2), a([u({ type: Boolean })], L.prototype, "highlighting", 2), L = a([x("navu-home-visitor-flow-item")], L); var J = class extends f {
    constructor() { super(...arguments); this.height = 160 } render() {
      let e = { "--visitor-flow-to": `${this.to || this.from || "transparent"}`, "--visitor-flow-from": `${this.from || this.to || "transparent"}`, "--visitor-flow-item-half-height": `${this.height / 2}px` }; return d`
    <div id="container" style="${vt(e)}">
      <div id="arrow"></div>
      ${this.caption ? d`<div id="caption">${this.caption}</div>` : ""}
    </div>
    `}
  }; J.styles = [f.styles, v`
    :host {
      display: block;
    }
    #container {
      width: 20px;
      height: 100%;
      position: relative;
      background-color: var(--visitor-flow-to);
    }
    #arrow {
      width: 0px;
      height: 0px;
      border-top: var(--visitor-flow-item-half-height) solid transparent;
      border-bottom:  var(--visitor-flow-item-half-height) solid transparent;
      border-left: 20px solid var(--visitor-flow-from);
      position: absolute;
      top: 0;
      left: 0;
    }
    #caption {
      position: absolute;
      top: 50%;
      right: 0px;
      font-size: 12px;
      opacity: var(--visitor-flow-arrow-caption-opacity, 1);
      text-align: center;
      transform: translateY(-50%);
      padding: var(--visitor-flow-arrow-caption-padding, 2px 5px);
    }
    `], a([u()], J.prototype, "to", 2), a([u()], J.prototype, "from", 2), a([u({ type: Number })], J.prototype, "height", 2), a([u()], J.prototype, "caption", 2), J = a([x("navu-home-visitor-flow-arrow")], J); var br = { totalPageviews: 0, totalVisitors: 1e3, newVisitors: 1e3, bots: 0, foreign: 0, bounces: 0, prospects: 500, newWanderers: 250, newActivatedWanderers: 0, returnWanderers: 0, returnActivatedWanderers: 0, followers: 0, affiliates: 0, immediateConversions: 5, immediateConversionRate: 0, wandererConversions: 10, wandererConversionRate: 0, activatedWandererConversions: 0, activatedWandererConversionRate: 0, qualifiedConversions: 0, qualifiedConversionRate: 0, newContacts: 15, returnContacts: 0, withNavuClicks: 0, gdprPageviews: 0 }, Ii = ["#f3e5f5", "#ce93d8", "#ab47bc", "#8E24AA", "#6a1b9a"], Di = ["#000000", "#000000", "#ffffff", "#ffffff", "#ffffff"], at = class extends f {
    constructor() { super(...arguments); this.shadowed = !1; this.highlight = "default"; this.data = br } render() {
      let e = this.data, r = (e == null ? void 0 : e.immediateConversions) || 0, o = (e == null ? void 0 : e.newWanderers) || 0, n = ((e == null ? void 0 : e.newWanderers) || 0) + ((e == null ? void 0 : e.returnWanderers) || 0), s = ((e == null ? void 0 : e.newActivatedWanderers) || 0) + ((e == null ? void 0 : e.returnActivatedWanderers) || 0), c = (e == null ? void 0 : e.wandererConversions) || 0, l = ((e == null ? void 0 : e.newContacts) || 0) + ((e == null ? void 0 : e.returnContacts) || 0), p = l === 1 ? "Contact" : "Contacts", g = 160; r && (g = g - 32), s && n && (g = g / 2); let h = n || !s, m = (e == null ? void 0 : e.prospects) || 0, b = m === 1 ? "Prospect" : "Prospects", _ = (e == null ? void 0 : e.newVisitors) || 0, M = _ === 1 ? "Visitor" : "Visitors", $ = Ii, P = Di; return d`
    <div id="container" class="horiz highlight-${this.highlight} ${this.shadowed ? "shadowed" : ""}">
      <navu-home-visitor-flow-item id="visitorsItem" leftedge class="flex" .count="${_}" label="${M}"
        .bgcolor="${$[0]}" .fgcolor="${P[0]}"></navu-home-visitor-flow-item>
      <navu-home-visitor-flow-arrow 
      .from="${this.highlight === "visitors" || this.highlight === "default" ? $[0] : "transparent"}" 
      .to="${this.highlight !== "prospects" && this.highlight !== "default" ? "transparent" : $[1]}"></navu-home-visitor-flow-arrow>
    
      <navu-home-visitor-flow-item id="prospectsItem" class="flex" .count="${m}" label="${b}" .bgcolor="${$[1]}"
        .fgcolor="${P[1]}"></navu-home-visitor-flow-item>
    
      <div id="vertPanel" class="vert">
        ${r ? d`
        <div class="horiz">
          <navu-home-visitor-flow-item id="prospectImmediateItem" class="flex" caption=" " height="32" .bgcolor="${$[1]}" .fgcolor="${P[1]}">
          </navu-home-visitor-flow-item>
          <navu-home-visitor-flow-arrow id="immediateItem" class="dark" height="32"
            .from="${this.highlight === "prospects" || this.highlight === "default" ? $[1] : "transparent"}"
            .to="${this.highlight !== "contacts" && this.highlight !== "default" ? "transparent" : $[4]}"
            .caption="${r.toLocaleString()}"
            style="--visitor-flow-arrow-caption-padding: 2px 9px;">
          </navu-home-visitor-flow-arrow>
        </div>
        `: null}
        ${h ? this._renderWandererSection(n, o, c, g) : null}
      </div>
    
      <navu-home-visitor-flow-item id="contactsItem" rightedge class="flex" .count="${l}" label="${p}" .bgcolor="${$[4]}"
        .fgcolor="${P[4]}"></navu-home-visitor-flow-item>
    </div>
    `} _renderWandererSection(e, r, o, n, s = !0) {
      let c = e === 1 ? "Wanderer" : "Wanderers", l = Ii, p = Di; return d`
    <div class="flex horiz">
      ${r ? d`
      <navu-home-visitor-flow-arrow class="dark" height="${n}" style="--visitor-flow-arrow-caption-opacity: 0;"
        .from="${this.highlight === "prospects" || this.highlight === "default" ? l[1] : "transparent"}"
        .to="${this.highlight !== "wanderers" && this.highlight !== "default" ? "transparent" : l[2]}" .caption="${r.toLocaleString()}"></navu-home-visitor-flow-arrow>
      `: null}
    
      <navu-home-visitor-flow-item id="wanderersItem" height="${n}" class="flex" .count="${e}" label="${c}"
        .bgcolor="${l[2]}" .fgcolor="${p[2]}"></navu-home-visitor-flow-item>
    
      ${o ? d`
      <navu-home-visitor-flow-arrow
        height="${n}"  
        .from="${this.highlight === "wanderers" || this.highlight === "default" ? l[2] : "transparent"}"
        .to="${this.highlight !== "contacts" && this.highlight !== "default" ? "transparent" : l[4]}"
        .caption="${o.toLocaleString()}"></navu-home-visitor-flow-arrow>
      `: s ? d`<navu-home-visitor-flow-arrow height="${n}" .to="${this.highlight !== "contacts" && this.highlight !== "default" ? "transparent" : l[4]}"></navu-home-visitor-flow-arrow>` : null}
    </div>
    `}
  }; at.styles = [f.styles, v`
    :host {
      display: block;
      position: relative;
    }
    #vertPanel {
      flex: 1.2;
    }
    #container.shadowed {
      box-shadow: 0 2px 1px -1px rgb(0 0 0 / 20%), 0 1px 1px 0 rgb(0 0 0 / 14%), 0 1px 3px 0 rgb(0 0 0 / 12%);
      border-radius: 12px;
    }
    #container {
      --visitor-flow-arrow-caption-opacity: 0;
    }
    #container.highlight-default {
      --visitor-flow-arrow-caption-opacity: 1;
    }

    #container.highlight-wanderers #prospectImmediateItem,
    #container.highlight-wanderers #prospectsItem,
    #container.highlight-wanderers #contactsItem,
    #container.highlight-wanderers #visitorsItem {
      opacity: 0;
    }

    #container.highlight-visitors #prospectImmediateItem,
    #container.highlight-visitors #prospectsItem,
    #container.highlight-visitors #contactsItem,
    #container.highlight-visitors #wanderersItem {
      opacity: 0;
    }

    #container.highlight-prospects #visitorsItem,
    #container.highlight-prospects #contactsItem,
    #container.highlight-prospects #wanderersItem {
      opacity: 0;
    }

    #container.highlight-contacts #visitorsItem,
    #container.highlight-contacts #prospectImmediateItem,
    #container.highlight-contacts #prospectsItem,
    #container.highlight-contacts #wanderersItem {
      opacity: 0;
    }

    .footerContainer {
      padding: 8px 12px;
      align-items: flex-start;
      gap: 4px;
    }
    .footerContainer label {
      font-size: 12px;
      letter-spacing: 0.2px;
      line-height: 15px;
      display: inline-block;
      max-width: 140px;
      text-align: center;
      color: #808080;
    }
    #wandererFooter {
      align-items: center;
    }
    #contactFooter {
      align-items: flex-end;
      min-width: 20%;
    }
    navu-home-visitor-flow-arrow {
      color: white;
    }
    navu-home-visitor-flow-arrow.dark {
      color: #000000;
    }
    #popover {
      background-color: rgba(0, 0, 0, 0.8);
      color: white;
      position: absolute;
      left: 0px;
      bottom: 100%;
      margin-bottom: 8px;
      border-radius: 12px;
      padding: 12px;
      font-size: 12px;
      max-width: 400px;
      transform: translateX(var(--visitor-flow-popover-x));
      pointer-events: none;
      z-index: 2;
    }
    #popover.bottom {
      bottom: initial;
      top: 100%;
      margin-bottom: 0;
    }
    #popoverHeadline {
      font-size: 14px;
      margin-bottom: 6px;
    }
    #wanderersItem,
    #contactsItem {
      --visitor-flow-item-highlight-fg: #000;
    }
    `], a([u({ type: Boolean })], at.prototype, "shadowed", 2), a([u()], at.prototype, "highlight", 2), a([y()], at.prototype, "data", 2), at = a([x("navu-home-visitor-diagram")], at); var kt = class extends f {
    constructor() { super(...arguments); this._show = !1 } render() {
      return this._show ? d`
    <div id="container" class="horiz center">
      <div>
        <nv-icon>
          <svg xmlns="http://www.w3.org/2000/svg" height="32px" viewBox="0 0 24 24" width="32px">
            <circle cx="10.5" cy="8.5" r="1.5"/><circle cx="8.5" cy="13.5" r="1.5"/>
            <circle cx="15" cy="15" r="1"/>
            <path d="M21.95,10.99c-1.79-0.03-3.7-1.95-2.68-4.22c-2.97,1-5.78-1.59-5.19-4.56C7.11,0.74,2,6.41,2,12c0,5.52,4.48,10,10,10 C17.89,22,22.54,16.92,21.95,10.99z M12,20c-4.41,0-8-3.59-8-8c0-3.31,2.73-8.18,8.08-8.02c0.42,2.54,2.44,4.56,4.99,4.94 c0.07,0.36,0.52,2.55,2.92,3.63C19.7,16.86,16.06,20,12,20z"/>
          </svg>
        </nv-icon>
      </div>
      <div class="flex">
        We use cookies to create the best experience. By visiting, you agree to our 
        <a href="https://navu.co/terms/">terms of service</a> 
        and our <a href="https://navu.co/privacy/">privacy policy</a>.
      </div>
      <div>
        <nv-home-icon-button icon="close" @click="${this._hide}"></nv-home-icon-button>
      </div>
    </div>
    `: d``
    } connectedCallback() { let e = localStorage.getItem("navu-home-hide-cookies") === "true"; this._show = !e, super.connectedCallback() } _hide() { localStorage.setItem("navu-home-hide-cookies", "true"), this._show = !1 }
  }; kt.styles = [f.styles, v`
    :host {
      display: block;
      position: fixed;
      right: 20px;
      bottom: 18px;
    }
    #container {
      padding: 12px 0 12px 12px;
      border-radius: 5px;
      background-color: rgb(6, 40, 56);
      color: rgb(255, 255, 255);
      font-size: 12px;
      gap: 12px;
      max-width: 300px;
      --nv-primary: white;
    }
    svg {
      fill: white;
    }
    a, a:hover, a:visited {
      color: inherit;
    }
    `], a([y()], kt.prototype, "_show", 2), kt = a([x("navu-home-cookie-panel")], kt); te.define({ forward: "M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z", play: "M10 16.5l6-4.5-6-4.5v9zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z", close: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z", menu: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" }); var R = i => document.getElementById(i), Ge = async i => new Promise(t => setTimeout(t, i)); function xr() { let i = R("openMenuButton"), t = R("closeMenuButton"), e = R("mobileNav"); e.addEventListener("click", s => s.stopPropagation()); let r = s => { s && s.stopPropagation(), document.removeEventListener("click", r), document.body.style.overflow = "", document.documentElement.style.overflow = "", e.style.transform = "" }; i.addEventListener("click", s => { s.stopPropagation(), document.body.style.overflow = "hidden", document.documentElement.style.overflow = "hidden", e.style.transform = "translateX(0)", document.addEventListener("click", r) }), t.addEventListener("click", r), R("desktopNav").querySelectorAll("a.navlink").forEach(s => { window.location.href.indexOf(s.href) === 0 ? s.classList.add("selected") : s.classList.remove("selected") }) } function yr() { let i = R("homeForm"), t = R("formError"), e = R("formSuccess"); i && i.addEventListener("submit", async r => { r.preventDefault(), r.stopPropagation(); let o = null; t.textContent = "", t.style.opacity = "0"; let n = new FormData(i), s = []; if (n.forEach((c, l) => { if (l === "email" && !c && (o = "Please enter your email address"), l === "domain") if (c) { let p = c.trim(); p.indexOf("http") !== 0 && (c = "https://" + p) } else o = "Please enter your company website"; s.push({ objectTypeId: l === "domain" ? "0-2" : "0-1", name: l, value: c }) }), o) { t.textContent = o, t.style.opacity = "1"; return } else { let c = "https://api.hsforms.com/submissions/v3/integration/submit/22610936/6184a3c1-2f23-4237-8b1c-4fa80e8d8b47", l = { submittedAt: Date.now(), fields: s }, g = await (await fetch(c, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(l) })).json(); g.errors ? (console.error(g.errors), t.textContent = g.errors[0].message || "Failed to submit. Please try again later.", t.style.opacity = "1") : e.style.display = "flex" } }) } function wr() { document.querySelectorAll(".get-started-link").forEach(i => { let t = new URL(i.href); t.searchParams.append("contact", Date.now() + ""), i.setAttribute("href", t.toString()) }) } xr(); yr(); wr(); var Ft = class extends f {
    render() {
      return d`
    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 575.04 612.08" preserveAspectRatio="xMidYMid meet" focusable="false">
      <defs>
        <style>
          .cls-1 {
            fill: #91b3fa;
          }

          .cls-2 {
            fill: #bdd0fb;
          }

          .cls-3,
          .cls-6 {
            opacity: 0.5;
          }

          .cls-4,
          .cls-5,
          .cls-6 {
            fill: #fff;
          }

          .cls-4 {
            opacity: 0.57;
          }

          .cls-7 {
            fill: url(#linear-gradient);
          }

          .cls-8 {
            fill: url(#linear-gradient-2);
          }

          .cls-9 {
            fill: url(#linear-gradient-3);
          }

          .cls-10 {
            fill: url(#linear-gradient-4);
          }

          .cls-11 {
            fill: url(#linear-gradient-5);
          }

          .cls-12 {
            fill: url(#linear-gradient-6);
          }

          .cls-13 {
            fill: url(#linear-gradient-7);
          }

          .cls-14 {
            fill: url(#linear-gradient-8);
          }

          .cls-15 {
            fill: url(#linear-gradient-9);
          }

          .cls-16 {
            fill: url(#linear-gradient-10);
          }

          .cls-17 {
            fill: url(#linear-gradient-11);
          }

          .cls-18 {
            fill: url(#linear-gradient-12);
          }

          .cls-19 {
            fill: url(#linear-gradient-13);
          }

          .cls-20 {
            fill: url(#linear-gradient-14);
          }

          .cls-21 {
            fill: url(#linear-gradient-15);
          }

          .cls-22 {
            fill: url(#linear-gradient-16);
          }
        </style>
        <linearGradient id="linear-gradient" x1="391.21" y1="-63.33" x2="333.28" y2="56.07"
          gradientTransform="translate(-107.29 165.74) rotate(9.25)" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#4f52ff" />
          <stop offset="1" stop-color="#4042e2" />
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="131.5" y1="531.43" x2="291.5" y2="376.43" gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#ff928e" />
          <stop offset="1" stop-color="#fe7062" />
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="96.87" y1="400.93" x2="219.04" y2="696.03"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#febbba" />
          <stop offset="1" stop-color="#ff928e" />
        </linearGradient>
        <linearGradient id="linear-gradient-4" x1="-2348.12" y1="400.29" x2="-2225.95" y2="695.39"
          gradientTransform="matrix(-1, 0, 0, 1, -2034.68, 0)" xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-5" x1="205.38" y1="439.2" x2="199.05" y2="695.85"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#09005d" />
          <stop offset="1" stop-color="#1a0f91" />
        </linearGradient>
        <linearGradient id="linear-gradient-6" x1="285.56" y1="583.02" x2="352.32" y2="583.02"
          gradientTransform="translate(-2.36 8.6) rotate(0.44)" xlink:href="#linear-gradient-5" />
        <linearGradient id="linear-gradient-7" x1="322.77" y1="473.45" x2="252.3" y2="664.32"
          xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-8" x1="-2841.27" y1="566.6" x2="-2774.48" y2="566.6"
          gradientTransform="matrix(-1, -0.02, -0.02, 1, -2712.68, -29.82)" xlink:href="#linear-gradient-5" />
        <linearGradient id="linear-gradient-9" x1="181.59" y1="415.93" x2="111.08" y2="606.9"
          xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-10" x1="454.52" y1="393.23" x2="271.33" y2="530.85"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient" />
        <linearGradient id="linear-gradient-11" x1="186.98" y1="593.19" x2="138.97" y2="470.76"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient" />
        <linearGradient id="linear-gradient-12" x1="204.11" y1="425.29" x2="202.49" y2="283.86"
          xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-13" x1="331.81" y1="129.37" x2="336.87" y2="6.31"
          gradientTransform="translate(-107.29 165.74) rotate(9.25)" xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-14" x1="293.23" y1="206.98" x2="138.74" y2="316.47"
          gradientTransform="matrix(1, 0, 0, 1, 0, 0)" xlink:href="#linear-gradient" />
        <linearGradient id="linear-gradient-15" x1="-65.48" y1="446.38" x2="-57.54" y2="253.52"
          gradientTransform="translate(188.55 -88.3) rotate(-7.64)" xlink:href="#linear-gradient-3" />
        <linearGradient id="linear-gradient-16" x1="204.67" y1="419.39" x2="200.57" y2="615.85"
          gradientUnits="userSpaceOnUse">
          <stop offset="0" stop-color="#53d8ff" />
          <stop offset="1" stop-color="#3840f7" />
        </linearGradient>
      </defs>
      <title>Asset 1</title>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Metaphor_illustration" data-name="Metaphor illustration">
          <path class="cls-1"
            d="M318.48,327.92c-14.89-45.91-43.36-82.44-76.94-103.85a137,137,0,0,1-59.94-83.65q-1.29-5.46-3.07-10.93c-17.9-55.23-66.25-89-108-75.49S9.48,123.27,27.38,178.49a136,136,0,0,0,14.49,31c18.8,29.6,26.31,65.16,19.69,99.61-5.93,30.79-4,65.42,7.12,99.84,16.64,51.35,50.27,90.95,89,110.81a135,135,0,0,1,38.9,29.88c18.26,20.37,43.88,29.87,67.32,22.27,25.28-8.19,40.94-34,41.88-64a143.93,143.93,0,0,1,10.8-49.44C331.71,421.15,333.53,374.35,318.48,327.92Z" />
          <path class="cls-2"
            d="M104.2,108c17.29,34.73,33.44,70,49.23,105.41,3.95,8.86,7.76,17.77,11.6,26.68l5.75,13.35,5.64,13.41c3.73,8.95,7.58,17.85,11.2,26.85l10.88,27c7,18.08,14.19,36.1,20.88,54.31,3.35,9.1,6.88,18.13,10.05,27.3l9.64,27.46c12.48,36.73,24,73.8,33.7,111.37l-1.62.44-8.3-27.84-2.06-7-2.23-6.91L254.07,486l-4.47-13.82c-1.48-4.6-3.13-9.16-4.68-13.74-3.18-9.15-6.28-18.32-9.52-27.44-13.17-36.42-26.83-72.67-41.23-108.62-7.34-17.93-14.53-35.91-22-53.79l-5.56-13.42-5.68-13.37c-3.77-8.92-7.55-17.84-11.42-26.72q-11.37-26.73-23.15-53.31t-23.68-53.08Z" />
          <g class="cls-3">
            <path class="cls-2"
              d="M65.84,217.83a1.43,1.43,0,0,1-1-.6c-30.06-43-29.67-77.8-24.06-99.43,6.1-23.49,19.16-36.58,19.72-37.12a1.41,1.41,0,1,1,2,2c-.14.13-13.14,13.19-19,36-5.42,21-5.71,54.91,23.68,97a1.41,1.41,0,0,1-.35,2A1.43,1.43,0,0,1,65.84,217.83Z" />
          </g>
          <path class="cls-2"
            d="M184.21,418.08c-12.72-24-32-41.42-52.67-50a77.14,77.14,0,0,1-41.31-40.47q-1.24-2.89-2.76-5.75C72.16,293,42.14,279,20.42,290.57S-6.52,334.82,8.78,363.64a76.41,76.41,0,0,0,11,15.72,77.54,77.54,0,0,1,20.63,53.21c-.25,17.61,4.18,36.59,13.72,54.55,14.23,26.8,36.68,45.45,60,52.67a75.78,75.78,0,0,1,24.42,12.77c12.08,9.49,27.17,12.26,39.36,5.79,13.16-7,19.28-22.79,16.86-39.5A81,81,0,0,1,196,490.44C200.65,468.37,197.07,442.3,184.21,418.08Z" />
          <path class="cls-4"
            d="M44.3,317.19c13,17.54,25.33,35.48,37.53,53.54,3,4.52,6,9.08,9,13.64l4.49,6.83,4.43,6.87c2.94,4.59,5.94,9.15,8.82,13.77l8.65,13.87c5.65,9.33,11.38,18.6,16.86,28,2.74,4.71,5.58,9.36,8.23,14.13l8,14.25c10.49,19.12,20.51,38.51,29.53,58.36l-.85.4-7.31-14.6-1.82-3.65L168,519l-3.84-7.21-3.82-7.21c-1.27-2.41-2.63-4.77-3.93-7.15-2.66-4.75-5.27-9.53-7.95-14.26q-16.26-28.31-33.42-56.1c-5.81-9.21-11.54-18.46-17.42-27.63l-4.38-6.88-4.45-6.85c-3-4.57-5.92-9.14-8.93-13.68q-8.89-13.68-18-27.24c-6-9.07-12.14-18.09-18.28-27.08Z" />
          <g class="cls-3">
            <path class="cls-5"
              d="M40,380.26a.82.82,0,0,1-.69-.21C16,359,11.51,338.65,11.87,325.27c.39-14.54,6.25-23.94,6.5-24.33a.83.83,0,0,1,1.16-.26.84.84,0,0,1,.26,1.16,50.38,50.38,0,0,0-6.23,23.57c-.33,13,4.08,32.82,26.91,53.39a.84.84,0,0,1,.06,1.19A.83.83,0,0,1,40,380.26Z" />
          </g>
          <path class="cls-1"
            d="M261.52,300.3C271.45,253,295.9,213.63,327,188.75A137.08,137.08,0,0,0,377.8,99.13c.48-3.72,1.1-7.45,1.89-11.21,11.95-56.86,56.47-95.64,99.45-86.61s68.14,62.44,56.2,119.31A135.65,135.65,0,0,1,524.21,153c-15.56,31.46-19.26,67.66-9,101.24,9.17,30,11,64.68,3.53,100.13-11.1,52.87-40.36,95.86-76.83,119.75A134.77,134.77,0,0,0,406.38,508c-16,22.21-40.51,34.39-64.64,29.32-26-5.47-44.36-29.48-48.49-59.28a143.94,143.94,0,0,0-16-48.06C258.27,394.49,251.47,348.11,261.52,300.3Z" />
          <path class="cls-2"
            d="M451.39,58.64C437.88,95,425.55,131.85,413.6,168.79c-3,9.23-5.83,18.51-8.7,27.78l-4.31,13.91-4.18,13.94c-2.76,9.3-5.65,18.57-8.3,27.91l-7.95,28c-5.07,18.74-10.29,37.44-15,56.27-2.37,9.42-4.92,18.78-7.1,28.24l-6.67,28.35c-8.51,37.89-16.07,76-21.69,114.44l1.65.26,5.3-28.6,1.31-7.14,1.48-7.12,3-14.22,3-14.23c1-4.74,2.14-9.45,3.2-14.18,2.19-9.44,4.3-18.9,6.55-28.32,9.24-37.65,19-75.17,29.49-112.49,5.4-18.62,10.64-37.29,16.16-55.87l4.11-13.95,4.23-13.91c2.81-9.28,5.62-18.56,8.52-27.81q8.47-27.83,17.37-55.51C440.88,96.05,446.9,77.61,453,59.2Z" />
          <path class="cls-2"
            d="M501.25,163.85a1.38,1.38,0,0,0,1-.7c25.35-46,21.27-80.59,13.38-101.51C507,38.9,492.64,27.27,492,26.78A1.41,1.41,0,0,0,490.27,29c.14.11,14.47,11.72,22.74,33.78,7.63,20.35,11.53,54-13.26,99a1.41,1.41,0,0,0,.56,1.91A1.36,1.36,0,0,0,501.25,163.85Z" />
          <path class="cls-2"
            d="M372,455.3c14.66-25.55,36.23-43.79,58.94-52.38a83.72,83.72,0,0,0,46.27-42.44q1.45-3.09,3.2-6.14c17.63-30.72,50.7-44.86,73.87-31.56s27.65,49,10,79.7a83,83,0,0,1-12.53,16.67,84.13,84.13,0,0,0-24.29,57c-.35,19.12-5.84,39.55-16.83,58.71-16.39,28.56-41.42,48-67,55a82.26,82.26,0,0,0-26.94,13c-13.46,9.87-29.92,12.34-42.93,4.88-14-8.05-20.11-25.41-16.88-43.46a87.9,87.9,0,0,0-.21-30.86C352.34,509.29,357.15,481.13,372,455.3Z" />
          <path class="cls-4"
            d="M527.38,350.81c-14.68,18.57-28.75,37.59-42.62,56.77-3.47,4.79-6.86,9.64-10.27,14.47l-5.12,7.26-5.05,7.29c-3.35,4.88-6.76,9.71-10.06,14.63L444.38,466c-6.46,9.92-13,19.78-19.29,29.81-3.14,5-6.39,10-9.43,15L406.46,526c-12.07,20.37-23.63,41-34.12,62.27l.9.46,8.46-15.58,2.1-3.9,2.2-3.85,4.42-7.68,4.4-7.69c1.47-2.57,3-5.08,4.53-7.62,3-5.06,6-10.15,9.13-15.19q18.66-30.14,38.26-59.68c6.64-9.79,13.19-19.62,19.89-29.36l5-7.32,5.07-7.27q5.06-7.28,10.17-14.52,10.15-14.54,20.52-28.93t20.8-28.72Z" />
          <path class="cls-6"
            d="M529.77,419.4a.89.89,0,0,0,.76-.2c26.09-22,31.67-43.93,31.76-58.47.09-15.78-5.93-26.19-6.19-26.63a.91.91,0,1,0-1.57.93c.06.1,6,10.48,5.92,25.79-.11,14.12-5.59,35.47-31.1,57a.91.91,0,0,0-.11,1.29A.86.86,0,0,0,529.77,419.4Z" />
          <path class="cls-7"
            d="M177.74,266.62c-.3.56-18.93,14.27-18.93,14.27s4.12,29.43,20.82,41.05c18.37,12.78,44.31-10.53,44.31-10.53s20.64,4.91,31.62-38.06c2.52-9.86-12-10.69-29.57-8.88C203.37,266.82,177.74,266.62,177.74,266.62Z" />
          <path class="cls-8"
            d="M142.92,367a78.66,78.66,0,0,1,23.88-11.12c3.21-.87,20.54,4.17,31.25,3.92,14.7-.34,29.66-7,41.78-4s21.89,6.92,27.58,11c17,12.11,27,34.7,33.11,57.06a78,78,0,0,1-26,17.11l-2.68,108.72L207.5,582.56l-73.38-36.84,2.63-106.25s-23.3-10.85-25-14.79S122.36,381.16,142.92,367Z" />
          <path class="cls-9"
            d="M112.82,424.2s-31.22,86.57,40,122.15c14.79-2,9.1-26.52,9.1-26.52S131,513,140.25,440.77C131.7,433.73,112.82,424.2,112.82,424.2Z" />
          <path class="cls-10"
            d="M299,424.2s21.49,90.37-40,122.15c-14.78-2-9.1-26.52-9.1-26.52s24.94-12.28,21.65-79.06C280.14,433.73,299,424.2,299,424.2Z" />
          <rect class="cls-11" x="133.28" y="457.22" width="140.98" height="95.21" rx="8.33" ry="8.33" />
          <path class="cls-12"
            d="M336.09,580.65c-16.14-3.7-53.43-1.71-53.43-1.71l-1.51,4.11-2.51,20.41s35.51,6.4,53,6.39a16.21,16.21,0,0,0,4.91-.74,20.06,20.06,0,0,0,1.55-1.51C345.54,599.49,343.39,587.57,336.09,580.65Z" />
          <path class="cls-13"
            d="M272,577.79l6.31.27a12.13,12.13,0,0,1,8.87,4.59,14.89,14.89,0,0,1,3.26,10.23,11.78,11.78,0,0,1-3.42,7.79,9.58,9.58,0,0,1-7.39,2.81l-9.66-.69Z" />
          <path class="cls-14"
            d="M59.63,578.69c16.22-3.21,53.45-.07,53.45-.07l1.41,4.15,2,20.48S80.84,608.56,63.34,608a16.6,16.6,0,0,1-4.89-.89,20.31,20.31,0,0,1-1.51-1.56C49.72,597.23,52.16,585.38,59.63,578.69Z" />
          <path class="cls-15"
            d="M123.82,577.8l-6.32.07a12.09,12.09,0,0,0-9,4.31A14.88,14.88,0,0,0,105,592.32a11.82,11.82,0,0,0,3.22,7.89,9.62,9.62,0,0,0,7.32,3l9.67-.39Z" />
          <path class="cls-16"
            d="M340.6,516.65c-7.32-16.84-25.21-19.57-40.44-11.7-.27.35-96.73,49.79-181.79,71.45a93,93,0,0,1,4,24.28c0,1.82,0,3.62-.09,5.39,65.23-3.35,136-25.11,196.86-44.23C338,555.76,348.71,535.32,340.6,516.65Z" />
          <path class="cls-17"
            d="M272.41,602a56.19,56.19,0,0,1,5.49-26.28c.11-.37.25-.73.37-1.1-4.86-1.5-11.14-3.54-19.38-6.34-60.4-20.67-106.49-41.54-150.47-65.57-17.08-9.33-36.51-3.08-42,17.14-4.88,18.05,5.84,33.45,22.11,38.87,48.69,16.2,23.34,11.7,39.24,16.82,42.7,13.2,95.84,25.23,144.72,28.51C272.48,603.33,272.44,602.64,272.41,602Z" />
          <path class="cls-18"
            d="M166.8,355.91s6.5,28.16,38,27.57c32.13-.58,35-27.66,35-27.66l-21-4.49L217.09,328l-31.56,2.34-.59,22.21Z" />
          <path class="cls-19"
            d="M190,261.7s-36.18,70.07,6.73,87.07c30.27,12,49.25-46.53,43.59-62.38-8.75-24.51-14.52-21.6-14.52-21.6Z" />
          <path class="cls-20"
            d="M249,255.32c17.87,4.92,2.6,43.67-24.3,34.51s-37.48-9-41.68-1.64-5.09,33.62-14.19,20.65c-10-14.22-15.53-42.75-3.3-51.95,10.93-8.22,13.48-21,26.58-20.53,17.4.59,30.86-7.12,38.71-1.56C239.82,241.19,235.83,251.71,249,255.32Z" />
          <path class="cls-21" d="M181.35,294.21s-7.71-8.3-8.95,1.7,2.73,22.89,7.37,15.83S181.35,294.21,181.35,294.21Z" />
          <path class="cls-22"
            d="M212.08,483c.75,5.05-2,9.64-7,10.39a9.25,9.25,0,0,1-10.5-7.8c-.75-5,1.56-10.06,6.62-10.81A10,10,0,0,1,212.08,483Z" />
        </g>
      </g>
    </svg>
  `}
  }; Ft.styles = [f.styles, v`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      vertical-align: middle;
      fill: currentcolor;
      stroke: none;
      width: 100%;
      max-width: 500px;
      margin: 0px auto;
    }
    svg {
      display: block;
      height: 100%;
      width: 100%;
    }
    `], Ft = a([x("sally-graphic")], Ft); async function _r() { let i = document.getElementById("heroWidget"), t = 1; for (await Ge(1500); ;)await i.show(`${t}`), await Ge(2e3), t++, t > 4 && (t = 1) } function $r() { let i = R("analytics-p-wanderers"), t = R("target-p-landing"), e = R("target-p-scroll-card"), r = R("target-p-video-card"), o = R("target-p-form-card"), n = R("featureWidget"); n.style.opacity = "0"; let s = document.querySelector("sally-graphic"), c = R("vdg"), l = R("vdgWanderers"), p = new IntersectionObserver(g => { g.forEach(h => { let m = h.intersectionRatio >= .75; m && (h.target === e ? (s.classList.add("hidden"), n.style.opacity = "1", n.show("1", !0)) : h.target === r ? (s.classList.add("hidden"), n.style.opacity = "1", n.show("3", !0)) : h.target === o ? (s.classList.add("hidden"), n.style.opacity = "1", n.show("4", !0)) : (n.hideAll(), s.classList.remove("hidden"), n.style.opacity = "0")), h.target === i && (m ? (c.classList.add("blurred"), l.classList.add("showing")) : (c.classList.remove("blurred"), l.classList.remove("showing"))) }) }, { threshold: [0, .75, 1] });[i, o, e, r, t].forEach(g => p.observe(g)) } $r(); _r();
})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directive.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/class-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/style-map.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/directives/if-defined.js:
  (**
   * @license
   * Copyright 2018 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/