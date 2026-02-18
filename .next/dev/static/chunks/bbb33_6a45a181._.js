(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

(function() {
    var e = {
        675: function(e, r) {
            "use strict";
            r.byteLength = byteLength;
            r.toByteArray = toByteArray;
            r.fromByteArray = fromByteArray;
            var t = [];
            var f = [];
            var n = typeof Uint8Array !== "undefined" ? Uint8Array : Array;
            var i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
            for(var o = 0, u = i.length; o < u; ++o){
                t[o] = i[o];
                f[i.charCodeAt(o)] = o;
            }
            f["-".charCodeAt(0)] = 62;
            f["_".charCodeAt(0)] = 63;
            function getLens(e) {
                var r = e.length;
                if (r % 4 > 0) {
                    throw new Error("Invalid string. Length must be a multiple of 4");
                }
                var t = e.indexOf("=");
                if (t === -1) t = r;
                var f = t === r ? 0 : 4 - t % 4;
                return [
                    t,
                    f
                ];
            }
            function byteLength(e) {
                var r = getLens(e);
                var t = r[0];
                var f = r[1];
                return (t + f) * 3 / 4 - f;
            }
            function _byteLength(e, r, t) {
                return (r + t) * 3 / 4 - t;
            }
            function toByteArray(e) {
                var r;
                var t = getLens(e);
                var i = t[0];
                var o = t[1];
                var u = new n(_byteLength(e, i, o));
                var a = 0;
                var s = o > 0 ? i - 4 : i;
                var h;
                for(h = 0; h < s; h += 4){
                    r = f[e.charCodeAt(h)] << 18 | f[e.charCodeAt(h + 1)] << 12 | f[e.charCodeAt(h + 2)] << 6 | f[e.charCodeAt(h + 3)];
                    u[a++] = r >> 16 & 255;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                if (o === 2) {
                    r = f[e.charCodeAt(h)] << 2 | f[e.charCodeAt(h + 1)] >> 4;
                    u[a++] = r & 255;
                }
                if (o === 1) {
                    r = f[e.charCodeAt(h)] << 10 | f[e.charCodeAt(h + 1)] << 4 | f[e.charCodeAt(h + 2)] >> 2;
                    u[a++] = r >> 8 & 255;
                    u[a++] = r & 255;
                }
                return u;
            }
            function tripletToBase64(e) {
                return t[e >> 18 & 63] + t[e >> 12 & 63] + t[e >> 6 & 63] + t[e & 63];
            }
            function encodeChunk(e, r, t) {
                var f;
                var n = [];
                for(var i = r; i < t; i += 3){
                    f = (e[i] << 16 & 16711680) + (e[i + 1] << 8 & 65280) + (e[i + 2] & 255);
                    n.push(tripletToBase64(f));
                }
                return n.join("");
            }
            function fromByteArray(e) {
                var r;
                var f = e.length;
                var n = f % 3;
                var i = [];
                var o = 16383;
                for(var u = 0, a = f - n; u < a; u += o){
                    i.push(encodeChunk(e, u, u + o > a ? a : u + o));
                }
                if (n === 1) {
                    r = e[f - 1];
                    i.push(t[r >> 2] + t[r << 4 & 63] + "==");
                } else if (n === 2) {
                    r = (e[f - 2] << 8) + e[f - 1];
                    i.push(t[r >> 10] + t[r >> 4 & 63] + t[r << 2 & 63] + "=");
                }
                return i.join("");
            }
        },
        72: function(e, r, t) {
            "use strict";
            /*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */ var f = t(675);
            var n = t(783);
            var i = typeof Symbol === "function" && typeof Symbol.for === "function" ? Symbol.for("nodejs.util.inspect.custom") : null;
            r.Buffer = Buffer;
            r.SlowBuffer = SlowBuffer;
            r.INSPECT_MAX_BYTES = 50;
            var o = 2147483647;
            r.kMaxLength = o;
            Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport();
            if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== "undefined" && typeof console.error === "function") {
                console.error("This browser lacks typed array (Uint8Array) support which is required by " + "`buffer` v5.x. Use `buffer` v4.x if you require old browser support.");
            }
            function typedArraySupport() {
                try {
                    var e = new Uint8Array(1);
                    var r = {
                        foo: function() {
                            return 42;
                        }
                    };
                    Object.setPrototypeOf(r, Uint8Array.prototype);
                    Object.setPrototypeOf(e, r);
                    return e.foo() === 42;
                } catch (e) {
                    return false;
                }
            }
            Object.defineProperty(Buffer.prototype, "parent", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.buffer;
                }
            });
            Object.defineProperty(Buffer.prototype, "offset", {
                enumerable: true,
                get: function() {
                    if (!Buffer.isBuffer(this)) return undefined;
                    return this.byteOffset;
                }
            });
            function createBuffer(e) {
                if (e > o) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
                var r = new Uint8Array(e);
                Object.setPrototypeOf(r, Buffer.prototype);
                return r;
            }
            function Buffer(e, r, t) {
                if (typeof e === "number") {
                    if (typeof r === "string") {
                        throw new TypeError('The "string" argument must be of type string. Received type number');
                    }
                    return allocUnsafe(e);
                }
                return from(e, r, t);
            }
            Buffer.poolSize = 8192;
            function from(e, r, t) {
                if (typeof e === "string") {
                    return fromString(e, r);
                }
                if (ArrayBuffer.isView(e)) {
                    return fromArrayLike(e);
                }
                if (e == null) {
                    throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
                }
                if (isInstance(e, ArrayBuffer) || e && isInstance(e.buffer, ArrayBuffer)) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof SharedArrayBuffer !== "undefined" && (isInstance(e, SharedArrayBuffer) || e && isInstance(e.buffer, SharedArrayBuffer))) {
                    return fromArrayBuffer(e, r, t);
                }
                if (typeof e === "number") {
                    throw new TypeError('The "value" argument must not be of type number. Received type number');
                }
                var f = e.valueOf && e.valueOf();
                if (f != null && f !== e) {
                    return Buffer.from(f, r, t);
                }
                var n = fromObject(e);
                if (n) return n;
                if (typeof Symbol !== "undefined" && Symbol.toPrimitive != null && typeof e[Symbol.toPrimitive] === "function") {
                    return Buffer.from(e[Symbol.toPrimitive]("string"), r, t);
                }
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, " + "or Array-like Object. Received type " + typeof e);
            }
            Buffer.from = function(e, r, t) {
                return from(e, r, t);
            };
            Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype);
            Object.setPrototypeOf(Buffer, Uint8Array);
            function assertSize(e) {
                if (typeof e !== "number") {
                    throw new TypeError('"size" argument must be of type number');
                } else if (e < 0) {
                    throw new RangeError('The value "' + e + '" is invalid for option "size"');
                }
            }
            function alloc(e, r, t) {
                assertSize(e);
                if (e <= 0) {
                    return createBuffer(e);
                }
                if (r !== undefined) {
                    return typeof t === "string" ? createBuffer(e).fill(r, t) : createBuffer(e).fill(r);
                }
                return createBuffer(e);
            }
            Buffer.alloc = function(e, r, t) {
                return alloc(e, r, t);
            };
            function allocUnsafe(e) {
                assertSize(e);
                return createBuffer(e < 0 ? 0 : checked(e) | 0);
            }
            Buffer.allocUnsafe = function(e) {
                return allocUnsafe(e);
            };
            Buffer.allocUnsafeSlow = function(e) {
                return allocUnsafe(e);
            };
            function fromString(e, r) {
                if (typeof r !== "string" || r === "") {
                    r = "utf8";
                }
                if (!Buffer.isEncoding(r)) {
                    throw new TypeError("Unknown encoding: " + r);
                }
                var t = byteLength(e, r) | 0;
                var f = createBuffer(t);
                var n = f.write(e, r);
                if (n !== t) {
                    f = f.slice(0, n);
                }
                return f;
            }
            function fromArrayLike(e) {
                var r = e.length < 0 ? 0 : checked(e.length) | 0;
                var t = createBuffer(r);
                for(var f = 0; f < r; f += 1){
                    t[f] = e[f] & 255;
                }
                return t;
            }
            function fromArrayBuffer(e, r, t) {
                if (r < 0 || e.byteLength < r) {
                    throw new RangeError('"offset" is outside of buffer bounds');
                }
                if (e.byteLength < r + (t || 0)) {
                    throw new RangeError('"length" is outside of buffer bounds');
                }
                var f;
                if (r === undefined && t === undefined) {
                    f = new Uint8Array(e);
                } else if (t === undefined) {
                    f = new Uint8Array(e, r);
                } else {
                    f = new Uint8Array(e, r, t);
                }
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            }
            function fromObject(e) {
                if (Buffer.isBuffer(e)) {
                    var r = checked(e.length) | 0;
                    var t = createBuffer(r);
                    if (t.length === 0) {
                        return t;
                    }
                    e.copy(t, 0, 0, r);
                    return t;
                }
                if (e.length !== undefined) {
                    if (typeof e.length !== "number" || numberIsNaN(e.length)) {
                        return createBuffer(0);
                    }
                    return fromArrayLike(e);
                }
                if (e.type === "Buffer" && Array.isArray(e.data)) {
                    return fromArrayLike(e.data);
                }
            }
            function checked(e) {
                if (e >= o) {
                    throw new RangeError("Attempt to allocate Buffer larger than maximum " + "size: 0x" + o.toString(16) + " bytes");
                }
                return e | 0;
            }
            function SlowBuffer(e) {
                if (+e != e) {
                    e = 0;
                }
                return Buffer.alloc(+e);
            }
            Buffer.isBuffer = function isBuffer(e) {
                return e != null && e._isBuffer === true && e !== Buffer.prototype;
            };
            Buffer.compare = function compare(e, r) {
                if (isInstance(e, Uint8Array)) e = Buffer.from(e, e.offset, e.byteLength);
                if (isInstance(r, Uint8Array)) r = Buffer.from(r, r.offset, r.byteLength);
                if (!Buffer.isBuffer(e) || !Buffer.isBuffer(r)) {
                    throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                }
                if (e === r) return 0;
                var t = e.length;
                var f = r.length;
                for(var n = 0, i = Math.min(t, f); n < i; ++n){
                    if (e[n] !== r[n]) {
                        t = e[n];
                        f = r[n];
                        break;
                    }
                }
                if (t < f) return -1;
                if (f < t) return 1;
                return 0;
            };
            Buffer.isEncoding = function isEncoding(e) {
                switch(String(e).toLowerCase()){
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return true;
                    default:
                        return false;
                }
            };
            Buffer.concat = function concat(e, r) {
                if (!Array.isArray(e)) {
                    throw new TypeError('"list" argument must be an Array of Buffers');
                }
                if (e.length === 0) {
                    return Buffer.alloc(0);
                }
                var t;
                if (r === undefined) {
                    r = 0;
                    for(t = 0; t < e.length; ++t){
                        r += e[t].length;
                    }
                }
                var f = Buffer.allocUnsafe(r);
                var n = 0;
                for(t = 0; t < e.length; ++t){
                    var i = e[t];
                    if (isInstance(i, Uint8Array)) {
                        i = Buffer.from(i);
                    }
                    if (!Buffer.isBuffer(i)) {
                        throw new TypeError('"list" argument must be an Array of Buffers');
                    }
                    i.copy(f, n);
                    n += i.length;
                }
                return f;
            };
            function byteLength(e, r) {
                if (Buffer.isBuffer(e)) {
                    return e.length;
                }
                if (ArrayBuffer.isView(e) || isInstance(e, ArrayBuffer)) {
                    return e.byteLength;
                }
                if (typeof e !== "string") {
                    throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' + "Received type " + typeof e);
                }
                var t = e.length;
                var f = arguments.length > 2 && arguments[2] === true;
                if (!f && t === 0) return 0;
                var n = false;
                for(;;){
                    switch(r){
                        case "ascii":
                        case "latin1":
                        case "binary":
                            return t;
                        case "utf8":
                        case "utf-8":
                            return utf8ToBytes(e).length;
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return t * 2;
                        case "hex":
                            return t >>> 1;
                        case "base64":
                            return base64ToBytes(e).length;
                        default:
                            if (n) {
                                return f ? -1 : utf8ToBytes(e).length;
                            }
                            r = ("" + r).toLowerCase();
                            n = true;
                    }
                }
            }
            Buffer.byteLength = byteLength;
            function slowToString(e, r, t) {
                var f = false;
                if (r === undefined || r < 0) {
                    r = 0;
                }
                if (r > this.length) {
                    return "";
                }
                if (t === undefined || t > this.length) {
                    t = this.length;
                }
                if (t <= 0) {
                    return "";
                }
                t >>>= 0;
                r >>>= 0;
                if (t <= r) {
                    return "";
                }
                if (!e) e = "utf8";
                while(true){
                    switch(e){
                        case "hex":
                            return hexSlice(this, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Slice(this, r, t);
                        case "ascii":
                            return asciiSlice(this, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Slice(this, r, t);
                        case "base64":
                            return base64Slice(this, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return utf16leSlice(this, r, t);
                        default:
                            if (f) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase();
                            f = true;
                    }
                }
            }
            Buffer.prototype._isBuffer = true;
            function swap(e, r, t) {
                var f = e[r];
                e[r] = e[t];
                e[t] = f;
            }
            Buffer.prototype.swap16 = function swap16() {
                var e = this.length;
                if (e % 2 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 16-bits");
                }
                for(var r = 0; r < e; r += 2){
                    swap(this, r, r + 1);
                }
                return this;
            };
            Buffer.prototype.swap32 = function swap32() {
                var e = this.length;
                if (e % 4 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 32-bits");
                }
                for(var r = 0; r < e; r += 4){
                    swap(this, r, r + 3);
                    swap(this, r + 1, r + 2);
                }
                return this;
            };
            Buffer.prototype.swap64 = function swap64() {
                var e = this.length;
                if (e % 8 !== 0) {
                    throw new RangeError("Buffer size must be a multiple of 64-bits");
                }
                for(var r = 0; r < e; r += 8){
                    swap(this, r, r + 7);
                    swap(this, r + 1, r + 6);
                    swap(this, r + 2, r + 5);
                    swap(this, r + 3, r + 4);
                }
                return this;
            };
            Buffer.prototype.toString = function toString() {
                var e = this.length;
                if (e === 0) return "";
                if (arguments.length === 0) return utf8Slice(this, 0, e);
                return slowToString.apply(this, arguments);
            };
            Buffer.prototype.toLocaleString = Buffer.prototype.toString;
            Buffer.prototype.equals = function equals(e) {
                if (!Buffer.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (this === e) return true;
                return Buffer.compare(this, e) === 0;
            };
            Buffer.prototype.inspect = function inspect() {
                var e = "";
                var t = r.INSPECT_MAX_BYTES;
                e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim();
                if (this.length > t) e += " ... ";
                return "<Buffer " + e + ">";
            };
            if (i) {
                Buffer.prototype[i] = Buffer.prototype.inspect;
            }
            Buffer.prototype.compare = function compare(e, r, t, f, n) {
                if (isInstance(e, Uint8Array)) {
                    e = Buffer.from(e, e.offset, e.byteLength);
                }
                if (!Buffer.isBuffer(e)) {
                    throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. ' + "Received type " + typeof e);
                }
                if (r === undefined) {
                    r = 0;
                }
                if (t === undefined) {
                    t = e ? e.length : 0;
                }
                if (f === undefined) {
                    f = 0;
                }
                if (n === undefined) {
                    n = this.length;
                }
                if (r < 0 || t > e.length || f < 0 || n > this.length) {
                    throw new RangeError("out of range index");
                }
                if (f >= n && r >= t) {
                    return 0;
                }
                if (f >= n) {
                    return -1;
                }
                if (r >= t) {
                    return 1;
                }
                r >>>= 0;
                t >>>= 0;
                f >>>= 0;
                n >>>= 0;
                if (this === e) return 0;
                var i = n - f;
                var o = t - r;
                var u = Math.min(i, o);
                var a = this.slice(f, n);
                var s = e.slice(r, t);
                for(var h = 0; h < u; ++h){
                    if (a[h] !== s[h]) {
                        i = a[h];
                        o = s[h];
                        break;
                    }
                }
                if (i < o) return -1;
                if (o < i) return 1;
                return 0;
            };
            function bidirectionalIndexOf(e, r, t, f, n) {
                if (e.length === 0) return -1;
                if (typeof t === "string") {
                    f = t;
                    t = 0;
                } else if (t > 2147483647) {
                    t = 2147483647;
                } else if (t < -2147483648) {
                    t = -2147483648;
                }
                t = +t;
                if (numberIsNaN(t)) {
                    t = n ? 0 : e.length - 1;
                }
                if (t < 0) t = e.length + t;
                if (t >= e.length) {
                    if (n) return -1;
                    else t = e.length - 1;
                } else if (t < 0) {
                    if (n) t = 0;
                    else return -1;
                }
                if (typeof r === "string") {
                    r = Buffer.from(r, f);
                }
                if (Buffer.isBuffer(r)) {
                    if (r.length === 0) {
                        return -1;
                    }
                    return arrayIndexOf(e, r, t, f, n);
                } else if (typeof r === "number") {
                    r = r & 255;
                    if (typeof Uint8Array.prototype.indexOf === "function") {
                        if (n) {
                            return Uint8Array.prototype.indexOf.call(e, r, t);
                        } else {
                            return Uint8Array.prototype.lastIndexOf.call(e, r, t);
                        }
                    }
                    return arrayIndexOf(e, [
                        r
                    ], t, f, n);
                }
                throw new TypeError("val must be string, number or Buffer");
            }
            function arrayIndexOf(e, r, t, f, n) {
                var i = 1;
                var o = e.length;
                var u = r.length;
                if (f !== undefined) {
                    f = String(f).toLowerCase();
                    if (f === "ucs2" || f === "ucs-2" || f === "utf16le" || f === "utf-16le") {
                        if (e.length < 2 || r.length < 2) {
                            return -1;
                        }
                        i = 2;
                        o /= 2;
                        u /= 2;
                        t /= 2;
                    }
                }
                function read(e, r) {
                    if (i === 1) {
                        return e[r];
                    } else {
                        return e.readUInt16BE(r * i);
                    }
                }
                var a;
                if (n) {
                    var s = -1;
                    for(a = t; a < o; a++){
                        if (read(e, a) === read(r, s === -1 ? 0 : a - s)) {
                            if (s === -1) s = a;
                            if (a - s + 1 === u) return s * i;
                        } else {
                            if (s !== -1) a -= a - s;
                            s = -1;
                        }
                    }
                } else {
                    if (t + u > o) t = o - u;
                    for(a = t; a >= 0; a--){
                        var h = true;
                        for(var c = 0; c < u; c++){
                            if (read(e, a + c) !== read(r, c)) {
                                h = false;
                                break;
                            }
                        }
                        if (h) return a;
                    }
                }
                return -1;
            }
            Buffer.prototype.includes = function includes(e, r, t) {
                return this.indexOf(e, r, t) !== -1;
            };
            Buffer.prototype.indexOf = function indexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, true);
            };
            Buffer.prototype.lastIndexOf = function lastIndexOf(e, r, t) {
                return bidirectionalIndexOf(this, e, r, t, false);
            };
            function hexWrite(e, r, t, f) {
                t = Number(t) || 0;
                var n = e.length - t;
                if (!f) {
                    f = n;
                } else {
                    f = Number(f);
                    if (f > n) {
                        f = n;
                    }
                }
                var i = r.length;
                if (f > i / 2) {
                    f = i / 2;
                }
                for(var o = 0; o < f; ++o){
                    var u = parseInt(r.substr(o * 2, 2), 16);
                    if (numberIsNaN(u)) return o;
                    e[t + o] = u;
                }
                return o;
            }
            function utf8Write(e, r, t, f) {
                return blitBuffer(utf8ToBytes(r, e.length - t), e, t, f);
            }
            function asciiWrite(e, r, t, f) {
                return blitBuffer(asciiToBytes(r), e, t, f);
            }
            function latin1Write(e, r, t, f) {
                return asciiWrite(e, r, t, f);
            }
            function base64Write(e, r, t, f) {
                return blitBuffer(base64ToBytes(r), e, t, f);
            }
            function ucs2Write(e, r, t, f) {
                return blitBuffer(utf16leToBytes(r, e.length - t), e, t, f);
            }
            Buffer.prototype.write = function write(e, r, t, f) {
                if (r === undefined) {
                    f = "utf8";
                    t = this.length;
                    r = 0;
                } else if (t === undefined && typeof r === "string") {
                    f = r;
                    t = this.length;
                    r = 0;
                } else if (isFinite(r)) {
                    r = r >>> 0;
                    if (isFinite(t)) {
                        t = t >>> 0;
                        if (f === undefined) f = "utf8";
                    } else {
                        f = t;
                        t = undefined;
                    }
                } else {
                    throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                }
                var n = this.length - r;
                if (t === undefined || t > n) t = n;
                if (e.length > 0 && (t < 0 || r < 0) || r > this.length) {
                    throw new RangeError("Attempt to write outside buffer bounds");
                }
                if (!f) f = "utf8";
                var i = false;
                for(;;){
                    switch(f){
                        case "hex":
                            return hexWrite(this, e, r, t);
                        case "utf8":
                        case "utf-8":
                            return utf8Write(this, e, r, t);
                        case "ascii":
                            return asciiWrite(this, e, r, t);
                        case "latin1":
                        case "binary":
                            return latin1Write(this, e, r, t);
                        case "base64":
                            return base64Write(this, e, r, t);
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                            return ucs2Write(this, e, r, t);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + f);
                            f = ("" + f).toLowerCase();
                            i = true;
                    }
                }
            };
            Buffer.prototype.toJSON = function toJSON() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                };
            };
            function base64Slice(e, r, t) {
                if (r === 0 && t === e.length) {
                    return f.fromByteArray(e);
                } else {
                    return f.fromByteArray(e.slice(r, t));
                }
            }
            function utf8Slice(e, r, t) {
                t = Math.min(e.length, t);
                var f = [];
                var n = r;
                while(n < t){
                    var i = e[n];
                    var o = null;
                    var u = i > 239 ? 4 : i > 223 ? 3 : i > 191 ? 2 : 1;
                    if (n + u <= t) {
                        var a, s, h, c;
                        switch(u){
                            case 1:
                                if (i < 128) {
                                    o = i;
                                }
                                break;
                            case 2:
                                a = e[n + 1];
                                if ((a & 192) === 128) {
                                    c = (i & 31) << 6 | a & 63;
                                    if (c > 127) {
                                        o = c;
                                    }
                                }
                                break;
                            case 3:
                                a = e[n + 1];
                                s = e[n + 2];
                                if ((a & 192) === 128 && (s & 192) === 128) {
                                    c = (i & 15) << 12 | (a & 63) << 6 | s & 63;
                                    if (c > 2047 && (c < 55296 || c > 57343)) {
                                        o = c;
                                    }
                                }
                                break;
                            case 4:
                                a = e[n + 1];
                                s = e[n + 2];
                                h = e[n + 3];
                                if ((a & 192) === 128 && (s & 192) === 128 && (h & 192) === 128) {
                                    c = (i & 15) << 18 | (a & 63) << 12 | (s & 63) << 6 | h & 63;
                                    if (c > 65535 && c < 1114112) {
                                        o = c;
                                    }
                                }
                        }
                    }
                    if (o === null) {
                        o = 65533;
                        u = 1;
                    } else if (o > 65535) {
                        o -= 65536;
                        f.push(o >>> 10 & 1023 | 55296);
                        o = 56320 | o & 1023;
                    }
                    f.push(o);
                    n += u;
                }
                return decodeCodePointsArray(f);
            }
            var u = 4096;
            function decodeCodePointsArray(e) {
                var r = e.length;
                if (r <= u) {
                    return String.fromCharCode.apply(String, e);
                }
                var t = "";
                var f = 0;
                while(f < r){
                    t += String.fromCharCode.apply(String, e.slice(f, f += u));
                }
                return t;
            }
            function asciiSlice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n] & 127);
                }
                return f;
            }
            function latin1Slice(e, r, t) {
                var f = "";
                t = Math.min(e.length, t);
                for(var n = r; n < t; ++n){
                    f += String.fromCharCode(e[n]);
                }
                return f;
            }
            function hexSlice(e, r, t) {
                var f = e.length;
                if (!r || r < 0) r = 0;
                if (!t || t < 0 || t > f) t = f;
                var n = "";
                for(var i = r; i < t; ++i){
                    n += s[e[i]];
                }
                return n;
            }
            function utf16leSlice(e, r, t) {
                var f = e.slice(r, t);
                var n = "";
                for(var i = 0; i < f.length; i += 2){
                    n += String.fromCharCode(f[i] + f[i + 1] * 256);
                }
                return n;
            }
            Buffer.prototype.slice = function slice(e, r) {
                var t = this.length;
                e = ~~e;
                r = r === undefined ? t : ~~r;
                if (e < 0) {
                    e += t;
                    if (e < 0) e = 0;
                } else if (e > t) {
                    e = t;
                }
                if (r < 0) {
                    r += t;
                    if (r < 0) r = 0;
                } else if (r > t) {
                    r = t;
                }
                if (r < e) r = e;
                var f = this.subarray(e, r);
                Object.setPrototypeOf(f, Buffer.prototype);
                return f;
            };
            function checkOffset(e, r, t) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + r > t) throw new RangeError("Trying to access beyond buffer length");
            }
            Buffer.prototype.readUIntLE = function readUIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                return f;
            };
            Buffer.prototype.readUIntBE = function readUIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) {
                    checkOffset(e, r, this.length);
                }
                var f = this[e + --r];
                var n = 1;
                while(r > 0 && (n *= 256)){
                    f += this[e + --r] * n;
                }
                return f;
            };
            Buffer.prototype.readUInt8 = function readUInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                return this[e];
            };
            Buffer.prototype.readUInt16LE = function readUInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] | this[e + 1] << 8;
            };
            Buffer.prototype.readUInt16BE = function readUInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                return this[e] << 8 | this[e + 1];
            };
            Buffer.prototype.readUInt32LE = function readUInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + this[e + 3] * 16777216;
            };
            Buffer.prototype.readUInt32BE = function readUInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] * 16777216 + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]);
            };
            Buffer.prototype.readIntLE = function readIntLE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = this[e];
                var n = 1;
                var i = 0;
                while(++i < r && (n *= 256)){
                    f += this[e + i] * n;
                }
                n *= 128;
                if (f >= n) f -= Math.pow(2, 8 * r);
                return f;
            };
            Buffer.prototype.readIntBE = function readIntBE(e, r, t) {
                e = e >>> 0;
                r = r >>> 0;
                if (!t) checkOffset(e, r, this.length);
                var f = r;
                var n = 1;
                var i = this[e + --f];
                while(f > 0 && (n *= 256)){
                    i += this[e + --f] * n;
                }
                n *= 128;
                if (i >= n) i -= Math.pow(2, 8 * r);
                return i;
            };
            Buffer.prototype.readInt8 = function readInt8(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 1, this.length);
                if (!(this[e] & 128)) return this[e];
                return (255 - this[e] + 1) * -1;
            };
            Buffer.prototype.readInt16LE = function readInt16LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e] | this[e + 1] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt16BE = function readInt16BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 2, this.length);
                var t = this[e + 1] | this[e] << 8;
                return t & 32768 ? t | 4294901760 : t;
            };
            Buffer.prototype.readInt32LE = function readInt32LE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24;
            };
            Buffer.prototype.readInt32BE = function readInt32BE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3];
            };
            Buffer.prototype.readFloatLE = function readFloatLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, true, 23, 4);
            };
            Buffer.prototype.readFloatBE = function readFloatBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 4, this.length);
                return n.read(this, e, false, 23, 4);
            };
            Buffer.prototype.readDoubleLE = function readDoubleLE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, true, 52, 8);
            };
            Buffer.prototype.readDoubleBE = function readDoubleBE(e, r) {
                e = e >>> 0;
                if (!r) checkOffset(e, 8, this.length);
                return n.read(this, e, false, 52, 8);
            };
            function checkInt(e, r, t, f, n, i) {
                if (!Buffer.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (r > n || r < i) throw new RangeError('"value" argument is out of bounds');
                if (t + f > e.length) throw new RangeError("Index out of range");
            }
            Buffer.prototype.writeUIntLE = function writeUIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = 1;
                var o = 0;
                this[r] = e & 255;
                while(++o < t && (i *= 256)){
                    this[r + o] = e / i & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUIntBE = function writeUIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                t = t >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t) - 1;
                    checkInt(this, e, r, t, n, 0);
                }
                var i = t - 1;
                var o = 1;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    this[r + i] = e / o & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeUInt8 = function writeUInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 255, 0);
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeUInt16LE = function writeUInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeUInt16BE = function writeUInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 65535, 0);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeUInt32LE = function writeUInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r + 3] = e >>> 24;
                this[r + 2] = e >>> 16;
                this[r + 1] = e >>> 8;
                this[r] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeUInt32BE = function writeUInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 4294967295, 0);
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            Buffer.prototype.writeIntLE = function writeIntLE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = 0;
                var o = 1;
                var u = 0;
                this[r] = e & 255;
                while(++i < t && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i - 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeIntBE = function writeIntBE(e, r, t, f) {
                e = +e;
                r = r >>> 0;
                if (!f) {
                    var n = Math.pow(2, 8 * t - 1);
                    checkInt(this, e, r, t, n - 1, -n);
                }
                var i = t - 1;
                var o = 1;
                var u = 0;
                this[r + i] = e & 255;
                while(--i >= 0 && (o *= 256)){
                    if (e < 0 && u === 0 && this[r + i + 1] !== 0) {
                        u = 1;
                    }
                    this[r + i] = (e / o >> 0) - u & 255;
                }
                return r + t;
            };
            Buffer.prototype.writeInt8 = function writeInt8(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 1, 127, -128);
                if (e < 0) e = 255 + e + 1;
                this[r] = e & 255;
                return r + 1;
            };
            Buffer.prototype.writeInt16LE = function writeInt16LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                return r + 2;
            };
            Buffer.prototype.writeInt16BE = function writeInt16BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 2, 32767, -32768);
                this[r] = e >>> 8;
                this[r + 1] = e & 255;
                return r + 2;
            };
            Buffer.prototype.writeInt32LE = function writeInt32LE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                this[r] = e & 255;
                this[r + 1] = e >>> 8;
                this[r + 2] = e >>> 16;
                this[r + 3] = e >>> 24;
                return r + 4;
            };
            Buffer.prototype.writeInt32BE = function writeInt32BE(e, r, t) {
                e = +e;
                r = r >>> 0;
                if (!t) checkInt(this, e, r, 4, 2147483647, -2147483648);
                if (e < 0) e = 4294967295 + e + 1;
                this[r] = e >>> 24;
                this[r + 1] = e >>> 16;
                this[r + 2] = e >>> 8;
                this[r + 3] = e & 255;
                return r + 4;
            };
            function checkIEEE754(e, r, t, f, n, i) {
                if (t + f > e.length) throw new RangeError("Index out of range");
                if (t < 0) throw new RangeError("Index out of range");
            }
            function writeFloat(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 4, 34028234663852886e22, -34028234663852886e22);
                }
                n.write(e, r, t, f, 23, 4);
                return t + 4;
            }
            Buffer.prototype.writeFloatLE = function writeFloatLE(e, r, t) {
                return writeFloat(this, e, r, true, t);
            };
            Buffer.prototype.writeFloatBE = function writeFloatBE(e, r, t) {
                return writeFloat(this, e, r, false, t);
            };
            function writeDouble(e, r, t, f, i) {
                r = +r;
                t = t >>> 0;
                if (!i) {
                    checkIEEE754(e, r, t, 8, 17976931348623157e292, -17976931348623157e292);
                }
                n.write(e, r, t, f, 52, 8);
                return t + 8;
            }
            Buffer.prototype.writeDoubleLE = function writeDoubleLE(e, r, t) {
                return writeDouble(this, e, r, true, t);
            };
            Buffer.prototype.writeDoubleBE = function writeDoubleBE(e, r, t) {
                return writeDouble(this, e, r, false, t);
            };
            Buffer.prototype.copy = function copy(e, r, t, f) {
                if (!Buffer.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (!t) t = 0;
                if (!f && f !== 0) f = this.length;
                if (r >= e.length) r = e.length;
                if (!r) r = 0;
                if (f > 0 && f < t) f = t;
                if (f === t) return 0;
                if (e.length === 0 || this.length === 0) return 0;
                if (r < 0) {
                    throw new RangeError("targetStart out of bounds");
                }
                if (t < 0 || t >= this.length) throw new RangeError("Index out of range");
                if (f < 0) throw new RangeError("sourceEnd out of bounds");
                if (f > this.length) f = this.length;
                if (e.length - r < f - t) {
                    f = e.length - r + t;
                }
                var n = f - t;
                if (this === e && typeof Uint8Array.prototype.copyWithin === "function") {
                    this.copyWithin(r, t, f);
                } else if (this === e && t < r && r < f) {
                    for(var i = n - 1; i >= 0; --i){
                        e[i + r] = this[i + t];
                    }
                } else {
                    Uint8Array.prototype.set.call(e, this.subarray(t, f), r);
                }
                return n;
            };
            Buffer.prototype.fill = function fill(e, r, t, f) {
                if (typeof e === "string") {
                    if (typeof r === "string") {
                        f = r;
                        r = 0;
                        t = this.length;
                    } else if (typeof t === "string") {
                        f = t;
                        t = this.length;
                    }
                    if (f !== undefined && typeof f !== "string") {
                        throw new TypeError("encoding must be a string");
                    }
                    if (typeof f === "string" && !Buffer.isEncoding(f)) {
                        throw new TypeError("Unknown encoding: " + f);
                    }
                    if (e.length === 1) {
                        var n = e.charCodeAt(0);
                        if (f === "utf8" && n < 128 || f === "latin1") {
                            e = n;
                        }
                    }
                } else if (typeof e === "number") {
                    e = e & 255;
                } else if (typeof e === "boolean") {
                    e = Number(e);
                }
                if (r < 0 || this.length < r || this.length < t) {
                    throw new RangeError("Out of range index");
                }
                if (t <= r) {
                    return this;
                }
                r = r >>> 0;
                t = t === undefined ? this.length : t >>> 0;
                if (!e) e = 0;
                var i;
                if (typeof e === "number") {
                    for(i = r; i < t; ++i){
                        this[i] = e;
                    }
                } else {
                    var o = Buffer.isBuffer(e) ? e : Buffer.from(e, f);
                    var u = o.length;
                    if (u === 0) {
                        throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    }
                    for(i = 0; i < t - r; ++i){
                        this[i + r] = o[i % u];
                    }
                }
                return this;
            };
            var a = /[^+/0-9A-Za-z-_]/g;
            function base64clean(e) {
                e = e.split("=")[0];
                e = e.trim().replace(a, "");
                if (e.length < 2) return "";
                while(e.length % 4 !== 0){
                    e = e + "=";
                }
                return e;
            }
            function utf8ToBytes(e, r) {
                r = r || Infinity;
                var t;
                var f = e.length;
                var n = null;
                var i = [];
                for(var o = 0; o < f; ++o){
                    t = e.charCodeAt(o);
                    if (t > 55295 && t < 57344) {
                        if (!n) {
                            if (t > 56319) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            } else if (o + 1 === f) {
                                if ((r -= 3) > -1) i.push(239, 191, 189);
                                continue;
                            }
                            n = t;
                            continue;
                        }
                        if (t < 56320) {
                            if ((r -= 3) > -1) i.push(239, 191, 189);
                            n = t;
                            continue;
                        }
                        t = (n - 55296 << 10 | t - 56320) + 65536;
                    } else if (n) {
                        if ((r -= 3) > -1) i.push(239, 191, 189);
                    }
                    n = null;
                    if (t < 128) {
                        if ((r -= 1) < 0) break;
                        i.push(t);
                    } else if (t < 2048) {
                        if ((r -= 2) < 0) break;
                        i.push(t >> 6 | 192, t & 63 | 128);
                    } else if (t < 65536) {
                        if ((r -= 3) < 0) break;
                        i.push(t >> 12 | 224, t >> 6 & 63 | 128, t & 63 | 128);
                    } else if (t < 1114112) {
                        if ((r -= 4) < 0) break;
                        i.push(t >> 18 | 240, t >> 12 & 63 | 128, t >> 6 & 63 | 128, t & 63 | 128);
                    } else {
                        throw new Error("Invalid code point");
                    }
                }
                return i;
            }
            function asciiToBytes(e) {
                var r = [];
                for(var t = 0; t < e.length; ++t){
                    r.push(e.charCodeAt(t) & 255);
                }
                return r;
            }
            function utf16leToBytes(e, r) {
                var t, f, n;
                var i = [];
                for(var o = 0; o < e.length; ++o){
                    if ((r -= 2) < 0) break;
                    t = e.charCodeAt(o);
                    f = t >> 8;
                    n = t % 256;
                    i.push(n);
                    i.push(f);
                }
                return i;
            }
            function base64ToBytes(e) {
                return f.toByteArray(base64clean(e));
            }
            function blitBuffer(e, r, t, f) {
                for(var n = 0; n < f; ++n){
                    if (n + t >= r.length || n >= e.length) break;
                    r[n + t] = e[n];
                }
                return n;
            }
            function isInstance(e, r) {
                return e instanceof r || e != null && e.constructor != null && e.constructor.name != null && e.constructor.name === r.name;
            }
            function numberIsNaN(e) {
                return e !== e;
            }
            var s = function() {
                var e = "0123456789abcdef";
                var r = new Array(256);
                for(var t = 0; t < 16; ++t){
                    var f = t * 16;
                    for(var n = 0; n < 16; ++n){
                        r[f + n] = e[t] + e[n];
                    }
                }
                return r;
            }();
        },
        783: function(e, r) {
            /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ r.read = function(e, r, t, f, n) {
                var i, o;
                var u = n * 8 - f - 1;
                var a = (1 << u) - 1;
                var s = a >> 1;
                var h = -7;
                var c = t ? n - 1 : 0;
                var l = t ? -1 : 1;
                var p = e[r + c];
                c += l;
                i = p & (1 << -h) - 1;
                p >>= -h;
                h += u;
                for(; h > 0; i = i * 256 + e[r + c], c += l, h -= 8){}
                o = i & (1 << -h) - 1;
                i >>= -h;
                h += f;
                for(; h > 0; o = o * 256 + e[r + c], c += l, h -= 8){}
                if (i === 0) {
                    i = 1 - s;
                } else if (i === a) {
                    return o ? NaN : (p ? -1 : 1) * Infinity;
                } else {
                    o = o + Math.pow(2, f);
                    i = i - s;
                }
                return (p ? -1 : 1) * o * Math.pow(2, i - f);
            };
            r.write = function(e, r, t, f, n, i) {
                var o, u, a;
                var s = i * 8 - n - 1;
                var h = (1 << s) - 1;
                var c = h >> 1;
                var l = n === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0;
                var p = f ? 0 : i - 1;
                var y = f ? 1 : -1;
                var g = r < 0 || r === 0 && 1 / r < 0 ? 1 : 0;
                r = Math.abs(r);
                if (isNaN(r) || r === Infinity) {
                    u = isNaN(r) ? 1 : 0;
                    o = h;
                } else {
                    o = Math.floor(Math.log(r) / Math.LN2);
                    if (r * (a = Math.pow(2, -o)) < 1) {
                        o--;
                        a *= 2;
                    }
                    if (o + c >= 1) {
                        r += l / a;
                    } else {
                        r += l * Math.pow(2, 1 - c);
                    }
                    if (r * a >= 2) {
                        o++;
                        a /= 2;
                    }
                    if (o + c >= h) {
                        u = 0;
                        o = h;
                    } else if (o + c >= 1) {
                        u = (r * a - 1) * Math.pow(2, n);
                        o = o + c;
                    } else {
                        u = r * Math.pow(2, c - 1) * Math.pow(2, n);
                        o = 0;
                    }
                }
                for(; n >= 8; e[t + p] = u & 255, p += y, u /= 256, n -= 8){}
                o = o << n | u;
                s += n;
                for(; s > 0; e[t + p] = o & 255, p += y, o /= 256, s -= 8){}
                e[t + p - y] |= g * 128;
            };
        }
    };
    var r = {};
    function __nccwpck_require__(t) {
        var f = r[t];
        if (f !== undefined) {
            return f.exports;
        }
        var n = r[t] = {
            exports: {}
        };
        var i = true;
        try {
            e[t](n, n.exports, __nccwpck_require__);
            i = false;
        } finally{
            if (i) delete r[t];
        }
        return n.exports;
    }
    if (typeof __nccwpck_require__ !== "undefined") __nccwpck_require__.ab = ("TURBOPACK compile-time value", "/ROOT/Documents/react-project/timesheet/node_modules/next/dist/compiled/buffer") + "/";
    var t = __nccwpck_require__(72);
    module.exports = t;
})();
}),
"[project]/Documents/react-project/timesheet/node_modules/randombytes/browser.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/compiled/buffer/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/react-project/timesheet/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
function oldBrowser() {
    throw new Error('secure random number generation not supported by this browser\nuse chrome, FireFox or Internet Explorer 11');
}
var crypto = /*TURBOPACK member replacement*/ __turbopack_context__.g.crypto || /*TURBOPACK member replacement*/ __turbopack_context__.g.msCrypto;
if (crypto && crypto.getRandomValues) {
    module.exports = randomBytes;
} else {
    module.exports = oldBrowser;
}
function randomBytes(size, cb) {
    // phantomjs needs to throw
    if (size > 65536) throw new Error('requested too many random bytes');
    // in case browserify  isn't using the Uint8Array version
    var rawBytes = new /*TURBOPACK member replacement*/ __turbopack_context__.g.Uint8Array(size);
    // This will not work in older browsers.
    // See https://developer.mozilla.org/en-US/docs/Web/API/window.crypto.getRandomValues
    if (size > 0) {
        crypto.getRandomValues(rawBytes);
    }
    // phantomjs doesn't like a buffer being passed here
    var bytes = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$buffer$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Buffer"](rawBytes.buffer);
    if (typeof cb === 'function') {
        return __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$react$2d$project$2f$timesheet$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].nextTick(function() {
            cb(null, bytes);
        });
    }
    return bytes;
}
}),
"[project]/Documents/react-project/timesheet/node_modules/randomstring/lib/charset.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

function Charset() {
    this.chars = '';
}
Charset.prototype.setType = function(type) {
    if (Array.isArray(type)) {
        for(var i = 0; i < type.length; i++){
            this.chars += this.getCharacters(type[i]);
        }
    } else {
        this.chars = this.getCharacters(type);
    }
};
Charset.prototype.getCharacters = function(type) {
    var chars;
    var numbers = '0123456789';
    var charsLower = 'abcdefghijklmnopqrstuvwxyz';
    var charsUpper = charsLower.toUpperCase();
    var hexChars = 'abcdef';
    var binaryChars = '01';
    var octalChars = '01234567';
    if (type === 'alphanumeric') {
        chars = numbers + charsLower + charsUpper;
    } else if (type === 'numeric') {
        chars = numbers;
    } else if (type === 'alphabetic') {
        chars = charsLower + charsUpper;
    } else if (type === 'hex') {
        chars = numbers + hexChars;
    } else if (type === 'binary') {
        chars = binaryChars;
    } else if (type === 'octal') {
        chars = octalChars;
    } else {
        chars = type;
    }
    return chars;
};
Charset.prototype.removeUnreadable = function() {
    var unreadableChars = /[0OIl]/g;
    this.chars = this.chars.replace(unreadableChars, '');
};
Charset.prototype.setcapitalization = function(capitalization) {
    if (capitalization === 'uppercase') {
        this.chars = this.chars.toUpperCase();
    } else if (capitalization === 'lowercase') {
        this.chars = this.chars.toLowerCase();
    }
};
Charset.prototype.removeDuplicates = function() {
    var charMap = this.chars.split('');
    charMap = [
        ...new Set(charMap)
    ];
    this.chars = charMap.join('');
};
module.exports = exports = Charset;
}),
"[project]/Documents/react-project/timesheet/node_modules/randomstring/lib/randomstring.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var randomBytes = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/randombytes/browser.js [app-client] (ecmascript)");
var Charset = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/randomstring/lib/charset.js [app-client] (ecmascript)");
function unsafeRandomBytes(length) {
    var stack = [];
    for(var i = 0; i < length; i++){
        stack.push(Math.floor(Math.random() * 255));
    }
    return {
        length,
        readUInt8: function(index) {
            return stack[index];
        }
    };
}
function safeRandomBytes(length) {
    try {
        return randomBytes(length);
    } catch (e) {
        /* React/React Native Fix + Eternal loop removed */ return unsafeRandomBytes(length);
    }
}
function processString(buf, initialString, chars, reqLen, maxByte) {
    var string = initialString;
    for(var i = 0; i < buf.length && string.length < reqLen; i++){
        var randomByte = buf.readUInt8(i);
        if (randomByte < maxByte) {
            string += chars.charAt(randomByte % chars.length);
        }
    }
    return string;
}
function getAsyncString(string, chars, length, maxByte, cb) {
    randomBytes(length, function(err, buf) {
        if (err) {
            // Since it is waiting for entropy, errors are legit and we shouldn't just keep retrying
            cb(err);
        }
        var generatedString = processString(buf, string, chars, length, maxByte);
        if (generatedString.length < length) {
            getAsyncString(generatedString, chars, length, maxByte, cb);
        } else {
            cb(null, generatedString);
        }
    });
}
exports.generate = function(options, cb) {
    var charset = new Charset();
    var length, chars, capitalization, string = '';
    // Handle options
    if (typeof options === 'object') {
        length = typeof options.length === 'number' ? options.length : 32;
        if (options.charset) {
            charset.setType(options.charset);
        } else {
            charset.setType('alphanumeric');
        }
        if (options.capitalization) {
            charset.setcapitalization(options.capitalization);
        }
        if (options.readable) {
            charset.removeUnreadable();
        }
        charset.removeDuplicates();
    } else if (typeof options === 'number') {
        length = options;
        charset.setType('alphanumeric');
    } else {
        length = 32;
        charset.setType('alphanumeric');
    }
    // Generate the string
    var charsLen = charset.chars.length;
    var maxByte = 256 - 256 % charsLen;
    if (!cb) {
        while(string.length < length){
            var buf = safeRandomBytes(Math.ceil(length * 256 / maxByte));
            string = processString(buf, string, charset.chars, length, maxByte);
        }
        return string;
    }
    getAsyncString(string, charset.chars, length, maxByte, cb);
};
}),
"[project]/Documents/react-project/timesheet/node_modules/randomstring/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/randomstring/lib/randomstring.js [app-client] (ecmascript)");
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/reg-exr.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.RegExp = void 0;
exports.RegExp = {
    // Matches any non-alphanumeric characters
    NON_ALPHA_NUMERIC: /[^\w\s]/g,
    // Matches only numeric digits (0-9)
    DIGITS_ONLY: /^\d+$/,
    // Matches only alphabets (case-insensitive)
    ALPHABETS_ONLY: /^[a-zA-Z]+$/,
    // Matches alphanumeric characters (letters and digits)
    ALPHA_NUMERIC: /^[a-zA-Z0-9]+$/,
    // Matches an email address
    EMAIL: /^[\w.%+-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/,
    // Matches a URL
    URL: /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6}\.?)(\/[\w.-]*)*\/?$/i,
    // Matches a US phone number (formats like (123) 456-7890, 123-456-7890, etc.)
    PHONE_US: /^(\(\d{3}\)\s?|\d{3}[-.\s]?)?\d{3}[-.\s]?\d{4}$/,
    // Matches a password with at least one lowercase, one uppercase, one digit, and one special character
    STRONG_PASSWORD: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
    // Matches whitespace characters
    WHITESPACE: /\s+/g,
    // Matches any HTML tags
    HTML_TAG: /<\/?[\w\s="/.':;#-\/\?]+>/gi,
    // Matches IPv4 addresses
    IPV4: /^(25[0-5]|2[0-4]\d|1?\d?\d)(\.(25[0-5]|2[0-4]\d|1?\d?\d)){3}$/,
    // Matches dates in YYYY-MM-DD format
    DATE_YYYY_MM_DD: /^\d{4}-\d{2}-\d{2}$/,
    // Matches time in HH:MM 24-hour format
    TIME_HH_MM: /^([01]\d|2[0-3]):([0-5]\d)$/,
    // Matches ISO 8601 datetime format (e.g., 2023-08-15T13:45:30Z, 2023-08-15T13:45:30+05:30)
    ISO_DATETIME: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})$/,
    // Matches a hexadecimal color code
    HEX_COLOR: /^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/,
    // Matches a UUID (version 4)
    UUID_V4: /^[0-9a-f]{8}-[0-9a-f]{4}-4[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i,
    // Matches non-ASCII characters
    NON_ASCII: /[^\x00-\x7F]/g,
    // Matches line breaks (newlines)
    LINE_BREAK: /\r?\n/g,
    // Matches amounts in decimal format (e.g., 123.45, 0.99, 1000)
    AMOUNT_DECIMAL: /^\d+(\.\d{1,2})?$/,
    // Matches percentages from 0-100 or in decimal format (e.g., 25%, 99.99%, 100, 0.5)
    PERCENTAGE: /^(100(\.0{1,2})?|0|0?\.\d{1,2}|[1-9]?\d(\.\d{1,2})?)%?$/
};
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/countries.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.countries = void 0;
exports.countries = [
    {
        code: "AF",
        name: "Afghanistan",
        locale: "افغانستان",
        googleNames: [
            "Afghanistan",
            "Islamic Republic of Afghanistan"
        ],
        currencyCode: "AFN",
        currency: "؋",
        telCode: 93,
        flag: "🇦🇫"
    },
    {
        code: "AL",
        name: "Albania",
        locale: "Shqipëri",
        googleNames: [
            "Albania",
            "Republic of Albania"
        ],
        currencyCode: "ALL",
        currency: "L",
        telCode: 355,
        flag: "🇦🇱"
    },
    {
        code: "DZ",
        name: "Algeria",
        locale: "الجزائر",
        googleNames: [
            "Algeria",
            "People's Democratic Republic of Algeria"
        ],
        currencyCode: "DZD",
        currency: "د.ج",
        telCode: 213,
        flag: "🇩🇿"
    },
    {
        code: "AD",
        name: "Andorra",
        locale: "Andorra",
        googleNames: [
            "Andorra",
            "Principality of Andorra"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 376,
        flag: "🇦🇩"
    },
    {
        code: "AO",
        name: "Angola",
        locale: "Angola",
        googleNames: [
            "Angola",
            "Republic of Angola"
        ],
        currencyCode: "AOA",
        currency: "Kz",
        telCode: 244,
        flag: "🇦🇴"
    },
    {
        code: "AG",
        name: "Antigua and Barbuda",
        locale: "Antigua and Barbuda",
        googleNames: [
            "Antigua and Barbuda"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1268,
        flag: "🇦🇬"
    },
    {
        code: "AR",
        name: "Argentina",
        locale: "Argentina",
        googleNames: [
            "Argentina",
            "Argentine Republic"
        ],
        currencyCode: "ARS",
        currency: "$",
        telCode: 54,
        flag: "🇦🇷"
    },
    {
        code: "AM",
        name: "Armenia",
        locale: "Հայաստան",
        googleNames: [
            "Armenia",
            "Republic of Armenia"
        ],
        currencyCode: "AMD",
        currency: "֏",
        telCode: 374,
        flag: "🇦🇲"
    },
    {
        code: "AU",
        name: "Australia",
        locale: "Australia",
        googleNames: [
            "Australia",
            "Commonwealth of Australia"
        ],
        currencyCode: "AUD",
        currency: "$",
        telCode: 61,
        flag: "🇦🇺"
    },
    {
        code: "AT",
        name: "Austria",
        locale: "Österreich",
        googleNames: [
            "Austria",
            "Republic of Austria"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 43,
        flag: "🇦🇹"
    },
    {
        code: "AZ",
        name: "Azerbaijan",
        locale: "Azərbaycan",
        googleNames: [
            "Azerbaijan",
            "Republic of Azerbaijan"
        ],
        currencyCode: "AZN",
        currency: "₼",
        telCode: 994,
        flag: "🇦🇿"
    },
    {
        code: "BS",
        name: "Bahamas",
        locale: "Bahamas",
        googleNames: [
            "Bahamas",
            "Commonwealth of the Bahamas"
        ],
        currencyCode: "BSD",
        currency: "$",
        telCode: 1242,
        flag: "🇧🇸"
    },
    {
        code: "BH",
        name: "Bahrain",
        locale: "البحرين",
        googleNames: [
            "Bahrain",
            "Kingdom of Bahrain"
        ],
        currencyCode: "BHD",
        currency: ".د.ب",
        telCode: 973,
        flag: "🇧🇭"
    },
    {
        code: "BD",
        name: "Bangladesh",
        locale: "বাংলাদেশ",
        googleNames: [
            "Bangladesh",
            "People's Republic of Bangladesh"
        ],
        currencyCode: "BDT",
        currency: "৳",
        telCode: 880,
        flag: "🇧🇩"
    },
    {
        code: "BB",
        name: "Barbados",
        locale: "Barbados",
        googleNames: [
            "Barbados"
        ],
        currencyCode: "BBD",
        currency: "$",
        telCode: 1246,
        flag: "🇧🇧"
    },
    {
        code: "BY",
        name: "Belarus",
        locale: "Беларусь",
        googleNames: [
            "Belarus",
            "Republic of Belarus"
        ],
        currencyCode: "BYN",
        currency: "Br",
        telCode: 375,
        flag: "🇧🇾"
    },
    {
        code: "BE",
        name: "Belgium",
        locale: "België",
        googleNames: [
            "Belgium",
            "Kingdom of Belgium"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 32,
        flag: "🇧🇪"
    },
    {
        code: "BZ",
        name: "Belize",
        locale: "Belize",
        googleNames: [
            "Belize"
        ],
        currencyCode: "BZD",
        currency: "$",
        telCode: 501,
        flag: "🇧🇿"
    },
    {
        code: "BJ",
        name: "Benin",
        locale: "Bénin",
        googleNames: [
            "Benin",
            "Republic of Benin"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 229,
        flag: "🇧🇯"
    },
    {
        code: "BT",
        name: "Bhutan",
        locale: "འབྲུག",
        googleNames: [
            "Bhutan",
            "Kingdom of Bhutan"
        ],
        currencyCode: "BTN",
        currency: "Nu.",
        telCode: 975,
        flag: "🇧🇹"
    },
    {
        code: "BO",
        name: "Bolivia",
        locale: "Bolivia",
        googleNames: [
            "Bolivia",
            "Plurinational State of Bolivia"
        ],
        currencyCode: "BOB",
        currency: "Bs.",
        telCode: 591,
        flag: "🇧🇴"
    },
    {
        code: "BA",
        name: "Bosnia and Herzegovina",
        locale: "Bosna i Hercegovina",
        googleNames: [
            "Bosnia and Herzegovina"
        ],
        currencyCode: "BAM",
        currency: "KM",
        telCode: 387,
        flag: "🇧🇦"
    },
    {
        code: "BW",
        name: "Botswana",
        locale: "Botswana",
        googleNames: [
            "Botswana",
            "Republic of Botswana"
        ],
        currencyCode: "BWP",
        currency: "P",
        telCode: 267,
        flag: "🇧🇼"
    },
    {
        code: "BR",
        name: "Brazil",
        locale: "Brasil",
        googleNames: [
            "Brazil",
            "Federative Republic of Brazil"
        ],
        currencyCode: "BRL",
        currency: "R$",
        telCode: 55,
        flag: "🇧🇷"
    },
    {
        code: "BN",
        name: "Brunei",
        locale: "Brunei",
        googleNames: [
            "Brunei",
            "Nation of Brunei"
        ],
        currencyCode: "BND",
        currency: "$",
        telCode: 673,
        flag: "🇧🇳"
    },
    {
        code: "BG",
        name: "Bulgaria",
        locale: "България",
        googleNames: [
            "Bulgaria",
            "Republic of Bulgaria"
        ],
        currencyCode: "BGN",
        currency: "лв",
        telCode: 359,
        flag: "🇧🇬"
    },
    {
        code: "BF",
        name: "Burkina Faso",
        locale: "Burkina Faso",
        googleNames: [
            "Burkina Faso"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 226,
        flag: "🇧🇫"
    },
    {
        code: "BI",
        name: "Burundi",
        locale: "Uburundi",
        googleNames: [
            "Burundi",
            "Republic of Burundi"
        ],
        currencyCode: "BIF",
        currency: "Fr",
        telCode: 257,
        flag: "🇧🇮"
    },
    {
        code: "CV",
        name: "Cabo Verde",
        locale: "Kabu Verdi",
        googleNames: [
            "Cabo Verde",
            "Cape Verde"
        ],
        currencyCode: "CVE",
        currency: "$",
        telCode: 238,
        flag: "🇨🇻"
    },
    {
        code: "KH",
        name: "Cambodia",
        locale: "កម្ពុជា",
        googleNames: [
            "Cambodia",
            "Kingdom of Cambodia"
        ],
        currencyCode: "KHR",
        currency: "៛",
        telCode: 855,
        flag: "🇰🇭"
    },
    {
        code: "CM",
        name: "Cameroon",
        locale: "Cameroun",
        googleNames: [
            "Cameroon",
            "Republic of Cameroon"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 237,
        flag: "🇨🇲"
    },
    {
        code: "CA",
        name: "Canada",
        locale: "Canada",
        googleNames: [
            "Canada"
        ],
        currencyCode: "CAD",
        currency: "$",
        telCode: 1,
        flag: "🇨🇦"
    },
    {
        code: "CF",
        name: "Central African Republic",
        locale: "République centrafricaine",
        googleNames: [
            "Central African Republic"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 236,
        flag: "🇨🇫"
    },
    {
        code: "TD",
        name: "Chad",
        locale: "Tchad",
        googleNames: [
            "Chad",
            "Republic of Chad"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 235,
        flag: "🇹🇩"
    },
    {
        code: "CL",
        name: "Chile",
        locale: "Chile",
        googleNames: [
            "Chile",
            "Republic of Chile"
        ],
        currencyCode: "CLP",
        currency: "$",
        telCode: 56,
        flag: "🇨🇱"
    },
    {
        code: "CN",
        name: "China",
        locale: "中国",
        googleNames: [
            "China",
            "People's Republic of China"
        ],
        currencyCode: "CNY",
        currency: "¥",
        telCode: 86,
        flag: "🇨🇳"
    },
    {
        code: "CO",
        name: "Colombia",
        locale: "Colombia",
        googleNames: [
            "Colombia",
            "Republic of Colombia"
        ],
        currencyCode: "COP",
        currency: "$",
        telCode: 57,
        flag: "🇨🇴"
    },
    {
        code: "KM",
        name: "Comoros",
        locale: "جزر القمر",
        googleNames: [
            "Comoros",
            "Union of the Comoros"
        ],
        currencyCode: "KMF",
        currency: "Fr",
        telCode: 269,
        flag: "🇰🇲"
    },
    {
        code: "CG",
        name: "Congo",
        locale: "Congo",
        googleNames: [
            "Congo",
            "Republic of the Congo"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 242,
        flag: "🇨🇬"
    },
    {
        code: "CD",
        name: "Democratic Republic of the Congo",
        locale: "Congo, République démocratique du",
        googleNames: [
            "Democratic Republic of the Congo",
            "DR Congo"
        ],
        currencyCode: "CDF",
        currency: "Fr",
        telCode: 243,
        flag: "🇨🇩"
    },
    {
        code: "CR",
        name: "Costa Rica",
        locale: "Costa Rica",
        googleNames: [
            "Costa Rica",
            "Republic of Costa Rica"
        ],
        currencyCode: "CRC",
        currency: "₡",
        telCode: 506,
        flag: "🇨🇷"
    },
    {
        code: "CI",
        name: "Côte d'Ivoire",
        locale: "Côte d'Ivoire",
        googleNames: [
            "Côte d'Ivoire",
            "Ivory Coast"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 225,
        flag: "🇨🇮"
    },
    {
        code: "HR",
        name: "Croatia",
        locale: "Hrvatska",
        googleNames: [
            "Croatia",
            "Republic of Croatia"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 385,
        flag: "🇭🇷"
    },
    {
        code: "CU",
        name: "Cuba",
        locale: "Cuba",
        googleNames: [
            "Cuba",
            "Republic of Cuba"
        ],
        currencyCode: "CUP",
        currency: "$",
        telCode: 53,
        flag: "🇨🇺"
    },
    {
        code: "CY",
        name: "Cyprus",
        locale: "Κύπρος",
        googleNames: [
            "Cyprus",
            "Republic of Cyprus"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 357,
        flag: "🇨🇾"
    },
    {
        code: "CZ",
        name: "Czech Republic",
        locale: "Česko",
        googleNames: [
            "Czech Republic",
            "Czechia"
        ],
        currencyCode: "CZK",
        currency: "Kč",
        telCode: 420,
        flag: "🇨🇿"
    },
    {
        code: "DK",
        name: "Denmark",
        locale: "Danmark",
        googleNames: [
            "Denmark",
            "Kingdom of Denmark"
        ],
        currencyCode: "DKK",
        currency: "kr",
        telCode: 45,
        flag: "🇩🇰"
    },
    {
        code: "DJ",
        name: "Djibouti",
        locale: "جيبوتي",
        googleNames: [
            "Djibouti",
            "Republic of Djibouti"
        ],
        currencyCode: "DJF",
        currency: "Fr",
        telCode: 253,
        flag: "🇩🇯"
    },
    {
        code: "DM",
        name: "Dominica",
        locale: "Dominica",
        googleNames: [
            "Dominica",
            "Commonwealth of Dominica"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1767,
        flag: "🇩🇲"
    },
    {
        code: "DO",
        name: "Dominican Republic",
        locale: "República Dominicana",
        googleNames: [
            "Dominican Republic"
        ],
        currencyCode: "DOP",
        currency: "$",
        telCode: 1809,
        flag: "🇩🇴"
    },
    {
        code: "EC",
        name: "Ecuador",
        locale: "Ecuador",
        googleNames: [
            "Ecuador",
            "Republic of Ecuador"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 593,
        flag: "🇪🇨"
    },
    {
        code: "EG",
        name: "Egypt",
        locale: "مصر",
        googleNames: [
            "Egypt",
            "Arab Republic of Egypt"
        ],
        currencyCode: "EGP",
        currency: "£",
        telCode: 20,
        flag: "🇪🇬"
    },
    {
        code: "SV",
        name: "El Salvador",
        locale: "El Salvador",
        googleNames: [
            "El Salvador",
            "Republic of El Salvador"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 503,
        flag: "🇸🇻"
    },
    {
        code: "GQ",
        name: "Equatorial Guinea",
        locale: "Guinea Ecuatorial",
        googleNames: [
            "Equatorial Guinea",
            "Republic of Equatorial Guinea"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 240,
        flag: "🇬🇶"
    },
    {
        code: "ER",
        name: "Eritrea",
        locale: "ኤርትራ",
        googleNames: [
            "Eritrea",
            "State of Eritrea"
        ],
        currencyCode: "ERN",
        currency: "Nfk",
        telCode: 291,
        flag: "🇪🇷"
    },
    {
        code: "EE",
        name: "Estonia",
        locale: "Eesti",
        googleNames: [
            "Estonia",
            "Republic of Estonia"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 372,
        flag: "🇪🇪"
    },
    {
        code: "SZ",
        name: "Eswatini",
        locale: "Eswatini",
        googleNames: [
            "Eswatini",
            "Kingdom of Eswatini"
        ],
        currencyCode: "SZL",
        currency: "L",
        telCode: 268,
        flag: "🇸🇿"
    },
    {
        code: "ET",
        name: "Ethiopia",
        locale: "ኢትዮጵያ",
        googleNames: [
            "Ethiopia",
            "Federal Democratic Republic of Ethiopia"
        ],
        currencyCode: "ETB",
        currency: "Br",
        telCode: 251,
        flag: "🇪🇹"
    },
    {
        code: "FJ",
        name: "Fiji",
        locale: "Fiji",
        googleNames: [
            "Fiji",
            "Republic of Fiji"
        ],
        currencyCode: "FJD",
        currency: "$",
        telCode: 679,
        flag: "🇫🇯"
    },
    {
        code: "FI",
        name: "Finland",
        locale: "Suomi",
        googleNames: [
            "Finland",
            "Republic of Finland"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 358,
        flag: "🇫🇮"
    },
    {
        code: "FR",
        name: "France",
        locale: "France",
        googleNames: [
            "France",
            "French Republic"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 33,
        flag: "🇫🇷"
    },
    {
        code: "GA",
        name: "Gabon",
        locale: "Gabon",
        googleNames: [
            "Gabon",
            "Gabonese Republic"
        ],
        currencyCode: "XAF",
        currency: "CFA",
        telCode: 241,
        flag: "🇬🇦"
    },
    {
        code: "GM",
        name: "Gambia",
        locale: "Gambia",
        googleNames: [
            "Gambia",
            "Republic of the Gambia"
        ],
        currencyCode: "GMD",
        currency: "D",
        telCode: 220,
        flag: "🇬🇲"
    },
    {
        code: "GE",
        name: "Georgia",
        locale: "საქართველო",
        googleNames: [
            "Georgia"
        ],
        currencyCode: "GEL",
        currency: "₾",
        telCode: 995,
        flag: "🇬🇪"
    },
    {
        code: "DE",
        name: "Germany",
        locale: "Deutschland",
        googleNames: [
            "Germany",
            "Federal Republic of Germany"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 49,
        flag: "🇩🇪"
    },
    {
        code: "GH",
        name: "Ghana",
        locale: "Ghana",
        googleNames: [
            "Ghana",
            "Republic of Ghana"
        ],
        currencyCode: "GHS",
        currency: "₵",
        telCode: 233,
        flag: "🇬🇭"
    },
    {
        code: "GR",
        name: "Greece",
        locale: "Ελλάδα",
        googleNames: [
            "Greece",
            "Hellenic Republic"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 30,
        flag: "🇬🇷"
    },
    {
        code: "GD",
        name: "Grenada",
        locale: "Grenada",
        googleNames: [
            "Grenada"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1473,
        flag: "🇬🇩"
    },
    {
        code: "GT",
        name: "Guatemala",
        locale: "Guatemala",
        googleNames: [
            "Guatemala",
            "Republic of Guatemala"
        ],
        currencyCode: "GTQ",
        currency: "Q",
        telCode: 502,
        flag: "🇬🇹"
    },
    {
        code: "GN",
        name: "Guinea",
        locale: "Guinée",
        googleNames: [
            "Guinea",
            "Republic of Guinea"
        ],
        currencyCode: "GNF",
        currency: "Fr",
        telCode: 224,
        flag: "🇬🇳"
    },
    {
        code: "GW",
        name: "Guinea-Bissau",
        locale: "Guiné-Bissau",
        googleNames: [
            "Guinea-Bissau",
            "Republic of Guinea-Bissau"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 245,
        flag: "🇬🇼"
    },
    {
        code: "GY",
        name: "Guyana",
        locale: "Guyana",
        googleNames: [
            "Guyana",
            "Co-operative Republic of Guyana"
        ],
        currencyCode: "GYD",
        currency: "$",
        telCode: 592,
        flag: "🇬🇾"
    },
    {
        code: "HT",
        name: "Haiti",
        locale: "Haïti",
        googleNames: [
            "Haiti",
            "Republic of Haiti"
        ],
        currencyCode: "HTG",
        currency: "G",
        telCode: 509,
        flag: "🇭🇹"
    },
    {
        code: "HN",
        name: "Honduras",
        locale: "Honduras",
        googleNames: [
            "Honduras",
            "Republic of Honduras"
        ],
        currencyCode: "HNL",
        currency: "L",
        telCode: 504,
        flag: "🇭🇳"
    },
    {
        code: "HU",
        name: "Hungary",
        locale: "Magyarország",
        googleNames: [
            "Hungary"
        ],
        currencyCode: "HUF",
        currency: "Ft",
        telCode: 36,
        flag: "🇭🇺"
    },
    {
        code: "IS",
        name: "Iceland",
        locale: "Ísland",
        googleNames: [
            "Iceland",
            "Republic of Iceland"
        ],
        currencyCode: "ISK",
        currency: "kr",
        telCode: 354,
        flag: "🇮🇸"
    },
    {
        code: "IN",
        name: "India",
        locale: "भारत",
        googleNames: [
            "India",
            "Republic of India",
            "Bharath"
        ],
        currencyCode: "INR",
        currency: "₹",
        telCode: 91,
        flag: "🇮🇳"
    },
    {
        code: "ID",
        name: "Indonesia",
        locale: "Indonesia",
        googleNames: [
            "Indonesia",
            "Republic of Indonesia"
        ],
        currencyCode: "IDR",
        currency: "Rp",
        telCode: 62,
        flag: "🇮🇩"
    },
    {
        code: "IR",
        name: "Iran",
        locale: "ایران",
        googleNames: [
            "Iran",
            "Islamic Republic of Iran"
        ],
        currencyCode: "IRR",
        currency: "﷼",
        telCode: 98,
        flag: "🇮🇷"
    },
    {
        code: "IQ",
        name: "Iraq",
        locale: "العراق",
        googleNames: [
            "Iraq",
            "Republic of Iraq"
        ],
        currencyCode: "IQD",
        currency: "ع.د",
        telCode: 964,
        flag: "🇮🇶"
    },
    {
        code: "IE",
        name: "Ireland",
        locale: "Éire",
        googleNames: [
            "Ireland"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 353,
        flag: "🇮🇪"
    },
    {
        code: "IL",
        name: "Israel",
        locale: "ישראל",
        googleNames: [
            "Israel",
            "State of Israel"
        ],
        currencyCode: "ILS",
        currency: "₪",
        telCode: 972,
        flag: "🇮🇱"
    },
    {
        code: "IT",
        name: "Italy",
        locale: "Italia",
        googleNames: [
            "Italy",
            "Italian Republic"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 39,
        flag: "🇮🇹"
    },
    {
        code: "JM",
        name: "Jamaica",
        locale: "Jamaica",
        googleNames: [
            "Jamaica"
        ],
        currencyCode: "JMD",
        currency: "$",
        telCode: 1876,
        flag: "🇯🇲"
    },
    {
        code: "JP",
        name: "Japan",
        locale: "日本",
        googleNames: [
            "Japan"
        ],
        currencyCode: "JPY",
        currency: "¥",
        telCode: 81,
        flag: "🇯🇵"
    },
    {
        code: "JO",
        name: "Jordan",
        locale: "الأردن",
        googleNames: [
            "Jordan",
            "Hashemite Kingdom of Jordan"
        ],
        currencyCode: "JOD",
        currency: "د.ا",
        telCode: 962,
        flag: "🇯🇴"
    },
    {
        code: "KZ",
        name: "Kazakhstan",
        locale: "Қазақстан",
        googleNames: [
            "Kazakhstan",
            "Republic of Kazakhstan"
        ],
        currencyCode: "KZT",
        currency: "₸",
        telCode: 7,
        flag: "🇰🇿"
    },
    {
        code: "KE",
        name: "Kenya",
        locale: "Kenya",
        googleNames: [
            "Kenya",
            "Republic of Kenya"
        ],
        currencyCode: "KES",
        currency: "Sh",
        telCode: 254,
        flag: "🇰🇪"
    },
    {
        code: "KI",
        name: "Kiribati",
        locale: "Kiribati",
        googleNames: [
            "Kiribati",
            "Republic of Kiribati"
        ],
        currencyCode: "AUD",
        currency: "$",
        telCode: 686,
        flag: "🇰🇮"
    },
    {
        code: "KP",
        name: "North Korea",
        locale: "조선",
        googleNames: [
            "North Korea",
            "Democratic People's Republic of Korea"
        ],
        currencyCode: "KPW",
        currency: "₩",
        telCode: 850,
        flag: "🇰🇵"
    },
    {
        code: "KR",
        name: "South Korea",
        locale: "대한민국",
        googleNames: [
            "South Korea",
            "Republic of Korea"
        ],
        currencyCode: "KRW",
        currency: "₩",
        telCode: 82,
        flag: "🇰🇷"
    },
    {
        code: "KW",
        name: "Kuwait",
        locale: "الكويت",
        googleNames: [
            "Kuwait",
            "State of Kuwait"
        ],
        currencyCode: "KWD",
        currency: "د.ك",
        telCode: 965,
        flag: "🇰🇼"
    },
    {
        code: "KG",
        name: "Kyrgyzstan",
        locale: "Кыргызстан",
        googleNames: [
            "Kyrgyzstan",
            "Kyrgyz Republic"
        ],
        currencyCode: "KGS",
        currency: "с",
        telCode: 996,
        flag: "🇰🇬"
    },
    {
        code: "LA",
        name: "Laos",
        locale: "ລາວ",
        googleNames: [
            "Laos",
            "Lao People's Democratic Republic"
        ],
        currencyCode: "LAK",
        currency: "₭",
        telCode: 856,
        flag: "🇱🇦"
    },
    {
        code: "LV",
        name: "Latvia",
        locale: "Latvija",
        googleNames: [
            "Latvia",
            "Republic of Latvia"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 371,
        flag: "🇱🇻"
    },
    {
        code: "LB",
        name: "Lebanon",
        locale: "لبنان",
        googleNames: [
            "Lebanon",
            "Lebanese Republic"
        ],
        currencyCode: "LBP",
        currency: "ل.ل",
        telCode: 961,
        flag: "🇱🇧"
    },
    {
        code: "LS",
        name: "Lesotho",
        locale: "Lesotho",
        googleNames: [
            "Lesotho",
            "Kingdom of Lesotho"
        ],
        currencyCode: "LSL",
        currency: "L",
        telCode: 266,
        flag: "🇱🇸"
    },
    {
        code: "LR",
        name: "Liberia",
        locale: "Liberia",
        googleNames: [
            "Liberia",
            "Republic of Liberia"
        ],
        currencyCode: "LRD",
        currency: "$",
        telCode: 231,
        flag: "🇱🇷"
    },
    {
        code: "LY",
        name: "Libya",
        locale: "ليبيا",
        googleNames: [
            "Libya"
        ],
        currencyCode: "LYD",
        currency: "ل.د",
        telCode: 218,
        flag: "🇱🇾"
    },
    {
        code: "LI",
        name: "Liechtenstein",
        locale: "Liechtenstein",
        googleNames: [
            "Liechtenstein",
            "Principality of Liechtenstein"
        ],
        currencyCode: "CHF",
        currency: "Fr",
        telCode: 423,
        flag: "🇱🇮"
    },
    {
        code: "LT",
        name: "Lithuania",
        locale: "Lietuva",
        googleNames: [
            "Lithuania",
            "Republic of Lithuania"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 370,
        flag: "🇱🇹"
    },
    {
        code: "LU",
        name: "Luxembourg",
        locale: "Luxembourg",
        googleNames: [
            "Luxembourg",
            "Grand Duchy of Luxembourg"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 352,
        flag: "🇱🇺"
    },
    {
        code: "MG",
        name: "Madagascar",
        locale: "Madagasikara",
        googleNames: [
            "Madagascar",
            "Republic of Madagascar"
        ],
        currencyCode: "MGA",
        currency: "Ar",
        telCode: 261,
        flag: "🇲🇬"
    },
    {
        code: "MW",
        name: "Malawi",
        locale: "Malawi",
        googleNames: [
            "Malawi",
            "Republic of Malawi"
        ],
        currencyCode: "MWK",
        currency: "MK",
        telCode: 265,
        flag: "🇲🇼"
    },
    {
        code: "MY",
        name: "Malaysia",
        locale: "Malaysia",
        googleNames: [
            "Malaysia"
        ],
        currencyCode: "MYR",
        currency: "RM",
        telCode: 60,
        flag: "🇲🇾"
    },
    {
        code: "MV",
        name: "Maldives",
        locale: "ދިވެހިރާއްޖެ",
        googleNames: [
            "Maldives",
            "Republic of Maldives"
        ],
        currencyCode: "MVR",
        currency: "Rf",
        telCode: 960,
        flag: "🇲🇻"
    },
    {
        code: "ML",
        name: "Mali",
        locale: "Mali",
        googleNames: [
            "Mali",
            "Republic of Mali"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 223,
        flag: "🇲🇱"
    },
    {
        code: "MT",
        name: "Malta",
        locale: "Malta",
        googleNames: [
            "Malta",
            "Republic of Malta"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 356,
        flag: "🇲🇹"
    },
    {
        code: "MH",
        name: "Marshall Islands",
        locale: "Marshall Islands",
        googleNames: [
            "Marshall Islands",
            "Republic of the Marshall Islands"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 692,
        flag: "🇲🇭"
    },
    {
        code: "MR",
        name: "Mauritania",
        locale: "موريتانيا",
        googleNames: [
            "Mauritania",
            "Islamic Republic of Mauritania"
        ],
        currencyCode: "MRU",
        currency: "UM",
        telCode: 222,
        flag: "🇲🇷"
    },
    {
        code: "MU",
        name: "Mauritius",
        locale: "Maurice",
        googleNames: [
            "Mauritius",
            "Republic of Mauritius"
        ],
        currencyCode: "MUR",
        currency: "₨",
        telCode: 230,
        flag: "🇲🇺"
    },
    {
        code: "MX",
        name: "Mexico",
        locale: "México",
        googleNames: [
            "Mexico",
            "United Mexican States"
        ],
        currencyCode: "MXN",
        currency: "$",
        telCode: 52,
        flag: "🇲🇽"
    },
    {
        code: "FM",
        name: "Micronesia",
        locale: "Micronesia",
        googleNames: [
            "Micronesia",
            "Federated States of Micronesia"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 691,
        flag: "🇫🇲"
    },
    {
        code: "MD",
        name: "Moldova",
        locale: "Moldova",
        googleNames: [
            "Moldova",
            "Republic of Moldova"
        ],
        currencyCode: "MDL",
        currency: "L",
        telCode: 373,
        flag: "🇲🇩"
    },
    {
        code: "MC",
        name: "Monaco",
        locale: "Monaco",
        googleNames: [
            "Monaco",
            "Principality of Monaco"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 377,
        flag: "🇲🇨"
    },
    {
        code: "MN",
        name: "Mongolia",
        locale: "Монгол",
        googleNames: [
            "Mongolia"
        ],
        currencyCode: "MNT",
        currency: "₮",
        telCode: 976,
        flag: "🇲🇳"
    },
    {
        code: "ME",
        name: "Montenegro",
        locale: "Crna Gora",
        googleNames: [
            "Montenegro"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 382,
        flag: "🇲🇪"
    },
    {
        code: "MA",
        name: "Morocco",
        locale: "المغرب",
        googleNames: [
            "Morocco",
            "Kingdom of Morocco"
        ],
        currencyCode: "MAD",
        currency: "د.م.",
        telCode: 212,
        flag: "🇲🇦"
    },
    {
        code: "MZ",
        name: "Mozambique",
        locale: "Moçambique",
        googleNames: [
            "Mozambique",
            "Republic of Mozambique"
        ],
        currencyCode: "MZN",
        currency: "MT",
        telCode: 258,
        flag: "🇲🇿"
    },
    {
        code: "MM",
        name: "Myanmar",
        locale: "မြန်မာ",
        googleNames: [
            "Myanmar",
            "Republic of the Union of Myanmar"
        ],
        currencyCode: "MMK",
        currency: "K",
        telCode: 95,
        flag: "🇲🇲"
    },
    {
        code: "NA",
        name: "Namibia",
        locale: "Namibia",
        googleNames: [
            "Namibia",
            "Republic of Namibia"
        ],
        currencyCode: "NAD",
        currency: "$",
        telCode: 264,
        flag: "🇳🇦"
    },
    {
        code: "NR",
        name: "Nauru",
        locale: "Nauru",
        googleNames: [
            "Nauru",
            "Republic of Nauru"
        ],
        currencyCode: "AUD",
        currency: "$",
        telCode: 674,
        flag: "🇳🇷"
    },
    {
        code: "NP",
        name: "Nepal",
        locale: "नेपाल",
        googleNames: [
            "Nepal",
            "Federal Democratic Republic of Nepal"
        ],
        currencyCode: "NPR",
        currency: "₨",
        telCode: 977,
        flag: "🇳🇵"
    },
    {
        code: "NL",
        name: "Netherlands",
        locale: "Nederland",
        googleNames: [
            "Netherlands",
            "Kingdom of the Netherlands"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 31,
        flag: "🇳🇱"
    },
    {
        code: "NZ",
        name: "New Zealand",
        locale: "Aotearoa",
        googleNames: [
            "New Zealand"
        ],
        currencyCode: "NZD",
        currency: "$",
        telCode: 64,
        flag: "🇳🇿"
    },
    {
        code: "NI",
        name: "Nicaragua",
        locale: "Nicaragua",
        googleNames: [
            "Nicaragua",
            "Republic of Nicaragua"
        ],
        currencyCode: "NIO",
        currency: "C$",
        telCode: 505,
        flag: "🇳🇮"
    },
    {
        code: "NE",
        name: "Niger",
        locale: "Niger",
        googleNames: [
            "Niger",
            "Republic of Niger"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 227,
        flag: "🇳🇪"
    },
    {
        code: "NG",
        name: "Nigeria",
        locale: "Nigeria",
        googleNames: [
            "Nigeria",
            "Federal Republic of Nigeria"
        ],
        currencyCode: "NGN",
        currency: "₦",
        telCode: 234,
        flag: "🇳🇬"
    },
    {
        code: "NU",
        name: "Niue",
        locale: "Niuē",
        googleNames: [
            "Niue"
        ],
        currencyCode: "NZD",
        currency: "$",
        telCode: 683,
        flag: "🇳🇺"
    },
    {
        code: "NO",
        name: "Norway",
        locale: "Norge",
        googleNames: [
            "Norway",
            "Kingdom of Norway"
        ],
        currencyCode: "NOK",
        currency: "kr",
        telCode: 47,
        flag: "🇳🇴"
    },
    {
        code: "OM",
        name: "Oman",
        locale: "عمان",
        googleNames: [
            "Oman",
            "Sultanate of Oman"
        ],
        currencyCode: "OMR",
        currency: "ر.ع.",
        telCode: 968,
        flag: "🇴🇲"
    },
    {
        code: "PK",
        name: "Pakistan",
        locale: "پاکستان",
        googleNames: [
            "Pakistan",
            "Islamic Republic of Pakistan"
        ],
        currencyCode: "PKR",
        currency: "₨",
        telCode: 92,
        flag: "🇵🇰"
    },
    {
        code: "PW",
        name: "Palau",
        locale: "Palau",
        googleNames: [
            "Palau",
            "Republic of Palau"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 680,
        flag: "🇵🇼"
    },
    {
        code: "PS",
        name: "Palestine",
        locale: "فلسطين",
        googleNames: [
            "Palestine",
            "State of Palestine"
        ],
        currencyCode: "ILS",
        currency: "₪",
        telCode: 970,
        flag: "🇵🇸"
    },
    {
        code: "PA",
        name: "Panama",
        locale: "Panamá",
        googleNames: [
            "Panama",
            "Republic of Panama"
        ],
        currencyCode: "PAB",
        currency: "B/.",
        telCode: 507,
        flag: "🇵🇦"
    },
    {
        code: "PG",
        name: "Papua New Guinea",
        locale: "Papua Niugini",
        googleNames: [
            "Papua New Guinea"
        ],
        currencyCode: "PGK",
        currency: "K",
        telCode: 675,
        flag: "🇵🇬"
    },
    {
        code: "PY",
        name: "Paraguay",
        locale: "Paraguay",
        googleNames: [
            "Paraguay",
            "Republic of Paraguay"
        ],
        currencyCode: "PYG",
        currency: "₲",
        telCode: 595,
        flag: "🇵🇾"
    },
    {
        code: "PE",
        name: "Peru",
        locale: "Perú",
        googleNames: [
            "Peru",
            "Republic of Peru"
        ],
        currencyCode: "PEN",
        currency: "S/",
        telCode: 51,
        flag: "🇵🇪"
    },
    {
        code: "PH",
        name: "Philippines",
        locale: "Pilipinas",
        googleNames: [
            "Philippines",
            "Republic of the Philippines"
        ],
        currencyCode: "PHP",
        currency: "₱",
        telCode: 63,
        flag: "🇵🇭"
    },
    {
        code: "PL",
        name: "Poland",
        locale: "Polska",
        googleNames: [
            "Poland",
            "Republic of Poland"
        ],
        currencyCode: "PLN",
        currency: "zł",
        telCode: 48,
        flag: "🇵🇱"
    },
    {
        code: "PT",
        name: "Portugal",
        locale: "Portugal",
        googleNames: [
            "Portugal",
            "Portuguese Republic"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 351,
        flag: "🇵🇹"
    },
    {
        code: "QA",
        name: "Qatar",
        locale: "قطر",
        googleNames: [
            "Qatar",
            "State of Qatar"
        ],
        currencyCode: "QAR",
        currency: "ر.ق",
        telCode: 974,
        flag: "🇶🇦"
    },
    {
        code: "RO",
        name: "Romania",
        locale: "România",
        googleNames: [
            "Romania"
        ],
        currencyCode: "RON",
        currency: "lei",
        telCode: 40,
        flag: "🇷🇴"
    },
    {
        code: "RU",
        name: "Russia",
        locale: "Россия",
        googleNames: [
            "Russia",
            "Russian Federation"
        ],
        currencyCode: "RUB",
        currency: "₽",
        telCode: 7,
        flag: "🇷🇺"
    },
    {
        code: "RW",
        name: "Rwanda",
        locale: "Rwanda",
        googleNames: [
            "Rwanda",
            "Republic of Rwanda"
        ],
        currencyCode: "RWF",
        currency: "Fr",
        telCode: 250,
        flag: "🇷🇼"
    },
    {
        code: "KN",
        name: "Saint Kitts and Nevis",
        locale: "Saint Kitts and Nevis",
        googleNames: [
            "Saint Kitts and Nevis"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1869,
        flag: "🇰🇳"
    },
    {
        code: "LC",
        name: "Saint Lucia",
        locale: "Saint Lucia",
        googleNames: [
            "Saint Lucia"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1758,
        flag: "🇱🇨"
    },
    {
        code: "VC",
        name: "Saint Vincent and the Grenadines",
        locale: "Saint Vincent and the Grenadines",
        googleNames: [
            "Saint Vincent and the Grenadines"
        ],
        currencyCode: "XCD",
        currency: "$",
        telCode: 1784,
        flag: "🇻🇨"
    },
    {
        code: "WS",
        name: "Samoa",
        locale: "Samoa",
        googleNames: [
            "Samoa",
            "Independent State of Samoa"
        ],
        currencyCode: "WST",
        currency: "T",
        telCode: 685,
        flag: "🇼🇸"
    },
    {
        code: "SM",
        name: "San Marino",
        locale: "San Marino",
        googleNames: [
            "San Marino",
            "Republic of San Marino"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 378,
        flag: "🇸🇲"
    },
    {
        code: "ST",
        name: "São Tomé and Príncipe",
        locale: "São Tomé e Príncipe",
        googleNames: [
            "São Tomé and Príncipe"
        ],
        currencyCode: "STN",
        currency: "Db",
        telCode: 239,
        flag: "🇸🇹"
    },
    {
        code: "SA",
        name: "Saudi Arabia",
        locale: "السعودية",
        googleNames: [
            "Saudi Arabia",
            "Kingdom of Saudi Arabia"
        ],
        currencyCode: "SAR",
        currency: "ر.س",
        telCode: 966,
        flag: "🇸🇦"
    },
    {
        code: "SN",
        name: "Senegal",
        locale: "Sénégal",
        googleNames: [
            "Senegal",
            "Republic of Senegal"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 221,
        flag: "🇸🇳"
    },
    {
        code: "RS",
        name: "Serbia",
        locale: "Србија",
        googleNames: [
            "Serbia",
            "Republic of Serbia"
        ],
        currencyCode: "RSD",
        currency: "дин",
        telCode: 381,
        flag: "🇷🇸"
    },
    {
        code: "SC",
        name: "Seychelles",
        locale: "Sesel",
        googleNames: [
            "Seychelles",
            "Republic of Seychelles"
        ],
        currencyCode: "SCR",
        currency: "₨",
        telCode: 248,
        flag: "🇸🇨"
    },
    {
        code: "SL",
        name: "Sierra Leone",
        locale: "Sierra Leone",
        googleNames: [
            "Sierra Leone",
            "Republic of Sierra Leone"
        ],
        currencyCode: "SLL",
        currency: "Le",
        telCode: 232,
        flag: "🇸🇱"
    },
    {
        code: "SG",
        name: "Singapore",
        locale: "Singapore",
        googleNames: [
            "Singapore",
            "Republic of Singapore"
        ],
        currencyCode: "SGD",
        currency: "$",
        telCode: 65,
        flag: "🇸🇬"
    },
    {
        code: "SK",
        name: "Slovakia",
        locale: "Slovensko",
        googleNames: [
            "Slovakia",
            "Slovak Republic"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 421,
        flag: "🇸🇰"
    },
    {
        code: "SI",
        name: "Slovenia",
        locale: "Slovenija",
        googleNames: [
            "Slovenia",
            "Republic of Slovenia"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 386,
        flag: "🇸🇮"
    },
    {
        code: "SB",
        name: "Solomon Islands",
        locale: "Solomon Islands",
        googleNames: [
            "Solomon Islands"
        ],
        currencyCode: "SBD",
        currency: "$",
        telCode: 677,
        flag: "🇸🇧"
    },
    {
        code: "SO",
        name: "Somalia",
        locale: "Soomaaliya",
        googleNames: [
            "Somalia",
            "Federal Republic of Somalia"
        ],
        currencyCode: "SOS",
        currency: "Sh",
        telCode: 252,
        flag: "🇸🇴"
    },
    {
        code: "ZA",
        name: "South Africa",
        locale: "South Africa",
        googleNames: [
            "South Africa",
            "Republic of South Africa"
        ],
        currencyCode: "ZAR",
        currency: "R",
        telCode: 27,
        flag: "🇿🇦"
    },
    {
        code: "SS",
        name: "South Sudan",
        locale: "South Sudan",
        googleNames: [
            "South Sudan",
            "Republic of South Sudan"
        ],
        currencyCode: "SSP",
        currency: "£",
        telCode: 211,
        flag: "🇸🇸"
    },
    {
        code: "ES",
        name: "Spain",
        locale: "España",
        googleNames: [
            "Spain",
            "Kingdom of Spain"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 34,
        flag: "🇪🇸"
    },
    {
        code: "LK",
        name: "Sri Lanka",
        locale: "ශ්‍රී ලංකා",
        googleNames: [
            "Sri Lanka",
            "Democratic Socialist Republic of Sri Lanka"
        ],
        currencyCode: "LKR",
        currency: "₨",
        telCode: 94,
        flag: "🇱🇰"
    },
    {
        code: "SD",
        name: "Sudan",
        locale: "السودان",
        googleNames: [
            "Sudan",
            "Republic of the Sudan"
        ],
        currencyCode: "SDG",
        currency: "£",
        telCode: 249,
        flag: "🇸🇩"
    },
    {
        code: "SR",
        name: "Suriname",
        locale: "Suriname",
        googleNames: [
            "Suriname",
            "Republic of Suriname"
        ],
        currencyCode: "SRD",
        currency: "$",
        telCode: 597,
        flag: "🇸🇷"
    },
    {
        code: "SE",
        name: "Sweden",
        locale: "Sverige",
        googleNames: [
            "Sweden",
            "Kingdom of Sweden"
        ],
        currencyCode: "SEK",
        currency: "kr",
        telCode: 46,
        flag: "🇸🇪"
    },
    {
        code: "CH",
        name: "Switzerland",
        locale: "Schweiz",
        googleNames: [
            "Switzerland",
            "Swiss Confederation"
        ],
        currencyCode: "CHF",
        currency: "Fr",
        telCode: 41,
        flag: "🇨🇭"
    },
    {
        code: "SY",
        name: "Syria",
        locale: "سوريا",
        googleNames: [
            "Syria",
            "Syrian Arab Republic"
        ],
        currencyCode: "SYP",
        currency: "£",
        telCode: 963,
        flag: "🇸🇾"
    },
    {
        code: "TJ",
        name: "Tajikistan",
        locale: "Тоҷикистон",
        googleNames: [
            "Tajikistan",
            "Republic of Tajikistan"
        ],
        currencyCode: "TJS",
        currency: "SM",
        telCode: 992,
        flag: "🇹🇯"
    },
    {
        code: "TZ",
        name: "Tanzania",
        locale: "Tanzania",
        googleNames: [
            "Tanzania",
            "United Republic of Tanzania"
        ],
        currencyCode: "TZS",
        currency: "Sh",
        telCode: 255,
        flag: "🇹🇿"
    },
    {
        code: "TH",
        name: "Thailand",
        locale: "ประเทศไทย",
        googleNames: [
            "Thailand",
            "Kingdom of Thailand"
        ],
        currencyCode: "THB",
        currency: "฿",
        telCode: 66,
        flag: "🇹🇭"
    },
    {
        code: "TL",
        name: "Timor-Leste",
        locale: "Timor-Leste",
        googleNames: [
            "Timor-Leste",
            "East Timor"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 670,
        flag: "🇹🇱"
    },
    {
        code: "TG",
        name: "Togo",
        locale: "Togo",
        googleNames: [
            "Togo",
            "Togolese Republic"
        ],
        currencyCode: "XOF",
        currency: "CFA",
        telCode: 228,
        flag: "🇹🇬"
    },
    {
        code: "TO",
        name: "Tonga",
        locale: "Tonga",
        googleNames: [
            "Tonga",
            "Kingdom of Tonga"
        ],
        currencyCode: "TOP",
        currency: "T$",
        telCode: 676,
        flag: "🇹🇴"
    },
    {
        code: "TT",
        name: "Trinidad and Tobago",
        locale: "Trinidad and Tobago",
        googleNames: [
            "Trinidad and Tobago",
            "Republic of Trinidad and Tobago"
        ],
        currencyCode: "TTD",
        currency: "$",
        telCode: 1868,
        flag: "🇹🇹"
    },
    {
        code: "TN",
        name: "Tunisia",
        locale: "تونس",
        googleNames: [
            "Tunisia",
            "Republic of Tunisia"
        ],
        currencyCode: "TND",
        currency: "د.ت",
        telCode: 216,
        flag: "🇹🇳"
    },
    {
        code: "TR",
        name: "Turkey",
        locale: "Türkiye",
        googleNames: [
            "Turkey",
            "Republic of Turkey"
        ],
        currencyCode: "TRY",
        currency: "₺",
        telCode: 90,
        flag: "🇹🇷"
    },
    {
        code: "TM",
        name: "Turkmenistan",
        locale: "Türkmenistan",
        googleNames: [
            "Turkmenistan"
        ],
        currencyCode: "TMT",
        currency: "m",
        telCode: 993,
        flag: "🇹🇲"
    },
    {
        code: "TV",
        name: "Tuvalu",
        locale: "Tuvalu",
        googleNames: [
            "Tuvalu"
        ],
        currencyCode: "AUD",
        currency: "$",
        telCode: 688,
        flag: "🇹🇻"
    },
    {
        code: "UG",
        name: "Uganda",
        locale: "Uganda",
        googleNames: [
            "Uganda",
            "Republic of Uganda"
        ],
        currencyCode: "UGX",
        currency: "Sh",
        telCode: 256,
        flag: "🇺🇬"
    },
    {
        code: "UA",
        name: "Ukraine",
        locale: "Україна",
        googleNames: [
            "Ukraine"
        ],
        currencyCode: "UAH",
        currency: "₴",
        telCode: 380,
        flag: "🇺🇦"
    },
    {
        code: "AE",
        name: "United Arab Emirates",
        locale: "الإمارات العربية المتحدة",
        googleNames: [
            "United Arab Emirates",
            "UAE"
        ],
        currencyCode: "AED",
        currency: "د.إ",
        telCode: 971,
        flag: "🇦🇪"
    },
    {
        code: "GB",
        name: "United Kingdom",
        locale: "United Kingdom",
        googleNames: [
            "United Kingdom",
            "UK",
            "Great Britain"
        ],
        currencyCode: "GBP",
        currency: "£",
        telCode: 44,
        flag: "🇬🇧"
    },
    {
        code: "US",
        name: "United States",
        locale: "United States",
        googleNames: [
            "United States",
            "USA",
            "United States of America"
        ],
        currencyCode: "USD",
        currency: "$",
        telCode: 1,
        flag: "🇺🇸"
    },
    {
        code: "UY",
        name: "Uruguay",
        locale: "Uruguay",
        googleNames: [
            "Uruguay",
            "Oriental Republic of Uruguay"
        ],
        currencyCode: "UYU",
        currency: "$",
        telCode: 598,
        flag: "🇺🇾"
    },
    {
        code: "UZ",
        name: "Uzbekistan",
        locale: "Oʻzbekiston",
        googleNames: [
            "Uzbekistan",
            "Republic of Uzbekistan"
        ],
        currencyCode: "UZS",
        currency: "сўм",
        telCode: 998,
        flag: "🇺🇿"
    },
    {
        code: "VU",
        name: "Vanuatu",
        locale: "Vanuatu",
        googleNames: [
            "Vanuatu",
            "Republic of Vanuatu"
        ],
        currencyCode: "VUV",
        currency: "Vt",
        telCode: 678,
        flag: "🇻🇺"
    },
    {
        code: "VA",
        name: "Vatican City",
        locale: "Città del Vaticano",
        googleNames: [
            "Vatican City",
            "Holy See"
        ],
        currencyCode: "EUR",
        currency: "€",
        telCode: 379,
        flag: "🇻🇦"
    },
    {
        code: "VE",
        name: "Venezuela",
        locale: "Venezuela",
        googleNames: [
            "Venezuela",
            "Bolivarian Republic of Venezuela"
        ],
        currencyCode: "VES",
        currency: "Bs.",
        telCode: 58,
        flag: "🇻🇪"
    },
    {
        code: "VN",
        name: "Vietnam",
        locale: "Việt Nam",
        googleNames: [
            "Vietnam",
            "Socialist Republic of Vietnam"
        ],
        currencyCode: "VND",
        currency: "₫",
        telCode: 84,
        flag: "🇻🇳"
    },
    {
        code: "YE",
        name: "Yemen",
        locale: "اليمن",
        googleNames: [
            "Yemen",
            "Republic of Yemen"
        ],
        currencyCode: "YER",
        currency: "﷼",
        telCode: 967,
        flag: "🇾🇪"
    },
    {
        code: "ZM",
        name: "Zambia",
        locale: "Zambia",
        googleNames: [
            "Zambia",
            "Republic of Zambia"
        ],
        currencyCode: "ZMW",
        currency: "ZK",
        telCode: 260,
        flag: "🇿🇲"
    },
    {
        code: "ZW",
        name: "Zimbabwe",
        locale: "Zimbabwe",
        googleNames: [
            "Zimbabwe",
            "Republic of Zimbabwe"
        ],
        currencyCode: "ZWL",
        currency: "$",
        telCode: 263,
        flag: "🇿🇼"
    }
];
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/languages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.languages = void 0;
exports.languages = [
    {
        lang: "ps-AF",
        code: "ps",
        country: "AF",
        name: "Pashto",
        dir: "rtl",
        locale: "پښتو"
    },
    {
        lang: "sq-AL",
        code: "sq",
        country: "AL",
        name: "Albanian",
        dir: "ltr",
        locale: "Shqip"
    },
    {
        lang: "ar-DZ",
        code: "ar",
        country: "DZ",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "ca-AD",
        code: "ca",
        country: "AD",
        name: "Catalan",
        dir: "ltr",
        locale: "Català"
    },
    {
        lang: "pt-AO",
        code: "pt",
        country: "AO",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "en-AG",
        code: "en",
        country: "AG",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-AR",
        code: "es",
        country: "AR",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "hy-AM",
        code: "hy",
        country: "AM",
        name: "Armenian",
        dir: "ltr",
        locale: "Հայերեն"
    },
    {
        lang: "en-AU",
        code: "en",
        country: "AU",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "de-AT",
        code: "de",
        country: "AT",
        name: "German",
        dir: "ltr",
        locale: "Deutsch"
    },
    {
        lang: "az-AZ",
        code: "az",
        country: "AZ",
        name: "Azerbaijani",
        dir: "ltr",
        locale: "Azərbaycan"
    },
    {
        lang: "en-BS",
        code: "en",
        country: "BS",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ar-BH",
        code: "ar",
        country: "BH",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "bn-BD",
        code: "bn",
        country: "BD",
        name: "Bengali",
        dir: "ltr",
        locale: "বাংলা"
    },
    {
        lang: "en-BB",
        code: "en",
        country: "BB",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "be-BY",
        code: "be",
        country: "BY",
        name: "Belarusian",
        dir: "ltr",
        locale: "Беларуская"
    },
    {
        lang: "nl-BE",
        code: "nl",
        country: "BE",
        name: "Dutch",
        dir: "ltr",
        locale: "Nederlands"
    },
    {
        lang: "en-BZ",
        code: "en",
        country: "BZ",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "fr-BJ",
        code: "fr",
        country: "BJ",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "dz-BT",
        code: "dz",
        country: "BT",
        name: "Dzongkha",
        dir: "ltr",
        locale: "ཇོང་ཁ"
    },
    {
        lang: "es-BO",
        code: "es",
        country: "BO",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "bs-BA",
        code: "bs",
        country: "BA",
        name: "Bosnian",
        dir: "ltr",
        locale: "Bosanski"
    },
    {
        lang: "en-BW",
        code: "en",
        country: "BW",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "pt-BR",
        code: "pt",
        country: "BR",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "ms-BN",
        code: "ms",
        country: "BN",
        name: "Malay",
        dir: "ltr",
        locale: "Bahasa Melayu"
    },
    {
        lang: "bg-BG",
        code: "bg",
        country: "BG",
        name: "Bulgarian",
        dir: "ltr",
        locale: "Български"
    },
    {
        lang: "fr-BF",
        code: "fr",
        country: "BF",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "rn-BI",
        code: "rn",
        country: "BI",
        name: "Kirundi",
        dir: "ltr",
        locale: "Ikirundi"
    },
    {
        lang: "pt-CV",
        code: "pt",
        country: "CV",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "km-KH",
        code: "km",
        country: "KH",
        name: "Khmer",
        dir: "ltr",
        locale: "ខ្មែរ"
    },
    {
        lang: "fr-CM",
        code: "fr",
        country: "CM",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "en-CA",
        code: "en",
        country: "CA",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "fr-CF",
        code: "fr",
        country: "CF",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "fr-TD",
        code: "fr",
        country: "TD",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "es-CL",
        code: "es",
        country: "CL",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "zh-CN",
        code: "zh",
        country: "CN",
        name: "Chinese (Simplified)",
        dir: "ltr",
        locale: "中文 (简体)"
    },
    {
        lang: "es-CO",
        code: "es",
        country: "CO",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "ar-KM",
        code: "ar",
        country: "KM",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "fr-CG",
        code: "fr",
        country: "CG",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "fr-CD",
        code: "fr",
        country: "CD",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "es-CR",
        code: "es",
        country: "CR",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "fr-CI",
        code: "fr",
        country: "CI",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "hr-HR",
        code: "hr",
        country: "HR",
        name: "Croatian",
        dir: "ltr",
        locale: "Hrvatski"
    },
    {
        lang: "es-CU",
        code: "es",
        country: "CU",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "el-CY",
        code: "el",
        country: "CY",
        name: "Greek",
        dir: "ltr",
        locale: "Ελληνικά"
    },
    {
        lang: "cs-CZ",
        code: "cs",
        country: "CZ",
        name: "Czech",
        dir: "ltr",
        locale: "Čeština"
    },
    {
        lang: "da-DK",
        code: "da",
        country: "DK",
        name: "Danish",
        dir: "ltr",
        locale: "Dansk"
    },
    {
        lang: "fr-DJ",
        code: "fr",
        country: "DJ",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "en-DM",
        code: "en",
        country: "DM",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-DO",
        code: "es",
        country: "DO",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "es-EC",
        code: "es",
        country: "EC",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "ar-EG",
        code: "ar",
        country: "EG",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "es-SV",
        code: "es",
        country: "SV",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "es-GQ",
        code: "es",
        country: "GQ",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "ti-ER",
        code: "ti",
        country: "ER",
        name: "Tigrinya",
        dir: "ltr",
        locale: "ትግርኛ"
    },
    {
        lang: "et-EE",
        code: "et",
        country: "EE",
        name: "Estonian",
        dir: "ltr",
        locale: "Eesti"
    },
    {
        lang: "si-SZ",
        code: "si",
        country: "SZ",
        name: "Swati",
        dir: "ltr",
        locale: "SiSwati"
    },
    {
        lang: "am-ET",
        code: "am",
        country: "ET",
        name: "Amharic",
        dir: "ltr",
        locale: "አማርኛ"
    },
    {
        lang: "en-FJ",
        code: "en",
        country: "FJ",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "fi-FI",
        code: "fi",
        country: "FI",
        name: "Finnish",
        dir: "ltr",
        locale: "Suomi"
    },
    {
        lang: "fr-FR",
        code: "fr",
        country: "FR",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "fr-GA",
        code: "fr",
        country: "GA",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "en-GM",
        code: "en",
        country: "GM",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ka-GE",
        code: "ka",
        country: "GE",
        name: "Georgian",
        dir: "ltr",
        locale: "ქართული"
    },
    {
        lang: "de-DE",
        code: "de",
        country: "DE",
        name: "German",
        dir: "ltr",
        locale: "Deutsch"
    },
    {
        lang: "en-GH",
        code: "en",
        country: "GH",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "el-GR",
        code: "el",
        country: "GR",
        name: "Greek",
        dir: "ltr",
        locale: "Ελληνικά"
    },
    {
        lang: "en-GD",
        code: "en",
        country: "GD",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-GT",
        code: "es",
        country: "GT",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "fr-GN",
        code: "fr",
        country: "GN",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "pt-GW",
        code: "pt",
        country: "GW",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "en-GY",
        code: "en",
        country: "GY",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "fr-HT",
        code: "fr",
        country: "HT",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "es-HN",
        code: "es",
        country: "HN",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "hu-HU",
        code: "hu",
        country: "HU",
        name: "Hungarian",
        dir: "ltr",
        locale: "Magyar"
    },
    {
        lang: "is-IS",
        code: "is",
        country: "IS",
        name: "Icelandic",
        dir: "ltr",
        locale: "Íslenska"
    },
    {
        lang: "hi-IN",
        code: "hi",
        country: "IN",
        name: "Hindi",
        dir: "ltr",
        locale: "हिन्दी"
    },
    {
        lang: "kn-IN",
        code: "kn",
        country: "IN",
        name: "Kannada",
        dir: "ltr",
        locale: "ಕನ್ನಡ"
    },
    {
        lang: "ta-IN",
        code: "ta",
        country: "IN",
        name: "Tamil",
        dir: "ltr",
        locale: "தமிழ்"
    },
    {
        lang: "te-IN",
        code: "te",
        country: "IN",
        name: "Telugu",
        dir: "ltr",
        locale: "తెలుగు"
    },
    {
        lang: "bn-IN",
        code: "bn",
        country: "IN",
        name: "Bengali",
        dir: "ltr",
        locale: "বাংলা"
    },
    {
        lang: "mr-IN",
        code: "mr",
        country: "IN",
        name: "Marathi",
        dir: "ltr",
        locale: "मराठी"
    },
    {
        lang: "gu-IN",
        code: "gu",
        country: "IN",
        name: "Gujarati",
        dir: "ltr",
        locale: "ગુજરાતી"
    },
    {
        lang: "ml-IN",
        code: "ml",
        country: "IN",
        name: "Malayalam",
        dir: "ltr",
        locale: "മലയാളം"
    },
    {
        lang: "pa-IN",
        code: "pa",
        country: "IN",
        name: "Punjabi",
        dir: "ltr",
        locale: "ਪੰਜਾਬੀ"
    },
    {
        lang: "or-IN",
        code: "or",
        country: "IN",
        name: "Odia",
        dir: "ltr",
        locale: "ଓଡ଼ିଆ"
    },
    {
        lang: "as-IN",
        code: "as",
        country: "IN",
        name: "Assamese",
        dir: "ltr",
        locale: "অসমীয়া"
    },
    {
        lang: "id-ID",
        code: "id",
        country: "ID",
        name: "Indonesian",
        dir: "ltr",
        locale: "Bahasa Indonesia"
    },
    {
        lang: "fa-IR",
        code: "fa",
        country: "IR",
        name: "Persian",
        dir: "rtl",
        locale: "فارسی"
    },
    {
        lang: "ar-IQ",
        code: "ar",
        country: "IQ",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "ga-IE",
        code: "ga",
        country: "IE",
        name: "Irish",
        dir: "ltr",
        locale: "Gaelige"
    },
    {
        lang: "he-IL",
        code: "he",
        country: "IL",
        name: "Hebrew",
        dir: "rtl",
        locale: "עברית"
    },
    {
        lang: "it-IT",
        code: "it",
        country: "IT",
        name: "Italian",
        dir: "ltr",
        locale: "Italiano"
    },
    {
        lang: "en-JM",
        code: "en",
        country: "JM",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ja-JP",
        code: "ja",
        country: "JP",
        name: "Japanese",
        dir: "ltr",
        locale: "日本語"
    },
    {
        lang: "ar-JO",
        code: "ar",
        country: "JO",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "kk-KZ",
        code: "kk",
        country: "KZ",
        name: "Kazakh",
        dir: "ltr",
        locale: "Қазақша"
    },
    {
        lang: "sw-KE",
        code: "sw",
        country: "KE",
        name: "Swahili",
        dir: "ltr",
        locale: "Kiswahili"
    },
    {
        lang: "en-KI",
        code: "en",
        country: "KI",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ko-KP",
        code: "ko",
        country: "KP",
        name: "Korean",
        dir: "ltr",
        locale: "한국어"
    },
    {
        lang: "ko-KR",
        code: "ko",
        country: "KR",
        name: "Korean",
        dir: "ltr",
        locale: "한국어"
    },
    {
        lang: "ar-KW",
        code: "ar",
        country: "KW",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "ky-KG",
        code: "ky",
        country: "KG",
        name: "Kyrgyz",
        dir: "ltr",
        locale: "Кыргызча"
    },
    {
        lang: "lo-LA",
        code: "lo",
        country: "LA",
        name: "Lao",
        dir: "ltr",
        locale: "ລາວ"
    },
    {
        lang: "lv-LV",
        code: "lv",
        country: "LV",
        name: "Latvian",
        dir: "ltr",
        locale: "Latviešu"
    },
    {
        lang: "ar-LB",
        code: "ar",
        country: "LB",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "st-LS",
        code: "st",
        country: "LS",
        name: "Sesotho",
        dir: "ltr",
        locale: "Sesotho"
    },
    {
        lang: "en-LR",
        code: "en",
        country: "LR",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ar-LY",
        code: "ar",
        country: "LY",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "de-LI",
        code: "de",
        country: "LI",
        name: "German",
        dir: "ltr",
        locale: "Deutsch"
    },
    {
        lang: "lt-LT",
        code: "lt",
        country: "LT",
        name: "Lithuanian",
        dir: "ltr",
        locale: "Lietuvių"
    },
    {
        lang: "fr-LU",
        code: "fr",
        country: "LU",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "mg-MG",
        code: "mg",
        country: "MG",
        name: "Malagasy",
        dir: "ltr",
        locale: "Malagasy"
    },
    {
        lang: "ny-MW",
        code: "ny",
        country: "MW",
        name: "Chichewa",
        dir: "ltr",
        locale: "Chichewa"
    },
    {
        lang: "ms-MY",
        code: "ms",
        country: "MY",
        name: "Malay",
        dir: "ltr",
        locale: "Bahasa Melayu"
    },
    {
        lang: "dv-MV",
        code: "dv",
        country: "MV",
        name: "Dhivehi",
        dir: "rtl",
        locale: "ދިވެހި"
    },
    {
        lang: "fr-ML",
        code: "fr",
        country: "ML",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "mt-MT",
        code: "mt",
        country: "MT",
        name: "Maltese",
        dir: "ltr",
        locale: "Malti"
    },
    {
        lang: "en-MH",
        code: "en",
        country: "MH",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ar-MR",
        code: "ar",
        country: "MR",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "en-MU",
        code: "en",
        country: "MU",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-MX",
        code: "es",
        country: "MX",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "en-FM",
        code: "en",
        country: "FM",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ro-MD",
        code: "ro",
        country: "MD",
        name: "Romanian",
        dir: "ltr",
        locale: "Română"
    },
    {
        lang: "fr-MC",
        code: "fr",
        country: "MC",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "mn-MN",
        code: "mn",
        country: "MN",
        name: "Mongolian",
        dir: "ltr",
        locale: "Монгол"
    },
    {
        lang: "sr-ME",
        code: "sr",
        country: "ME",
        name: "Serbian",
        dir: "ltr",
        locale: "Српски"
    },
    {
        lang: "ar-MA",
        code: "ar",
        country: "MA",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "pt-MZ",
        code: "pt",
        country: "MZ",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "my-MM",
        code: "my",
        country: "MM",
        name: "Burmese",
        dir: "ltr",
        locale: "မြန်မာ"
    },
    {
        lang: "en-NA",
        code: "en",
        country: "NA",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-NR",
        code: "en",
        country: "NR",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ne-NP",
        code: "ne",
        country: "NP",
        name: "Nepali",
        dir: "ltr",
        locale: "नेपाली"
    },
    {
        lang: "nl-NL",
        code: "nl",
        country: "NL",
        name: "Dutch",
        dir: "ltr",
        locale: "Nederlands"
    },
    {
        lang: "en-NZ",
        code: "en",
        country: "NZ",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-NI",
        code: "es",
        country: "NI",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "fr-NE",
        code: "fr",
        country: "NE",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "en-NG",
        code: "en",
        country: "NG",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "yo-NG",
        code: "yo",
        country: "NG",
        name: "Yoruba",
        dir: "ltr",
        locale: "Yorùbá"
    },
    {
        lang: "ha-NG",
        code: "ha",
        country: "NG",
        name: "Hausa",
        dir: "ltr",
        locale: "Hausa"
    },
    {
        lang: "ig-NG",
        code: "ig",
        country: "NG",
        name: "Igbo",
        dir: "ltr",
        locale: "Igbo"
    },
    {
        lang: "en-NU",
        code: "en",
        country: "NU",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "nb-NO",
        code: "nb",
        country: "NO",
        name: "Norwegian Bokmål",
        dir: "ltr",
        locale: "Norsk Bokmål"
    },
    {
        lang: "ar-OM",
        code: "ar",
        country: "OM",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "ur-PK",
        code: "ur",
        country: "PK",
        name: "Urdu",
        dir: "rtl",
        locale: "اردو"
    },
    {
        lang: "en-PW",
        code: "en",
        country: "PW",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ar-PS",
        code: "ar",
        country: "PS",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "es-PA",
        code: "es",
        country: "PA",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "en-PG",
        code: "en",
        country: "PG",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-PY",
        code: "es",
        country: "PY",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "es-PE",
        code: "es",
        country: "PE",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "tl-PH",
        code: "tl",
        country: "PH",
        name: "Tagalog",
        dir: "ltr",
        locale: "Tagalog"
    },
    {
        lang: "pl-PL",
        code: "pl",
        country: "PL",
        name: "Polish",
        dir: "ltr",
        locale: "Polski"
    },
    {
        lang: "pt-PT",
        code: "pt",
        country: "PT",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "ar-QA",
        code: "ar",
        country: "QA",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "ro-RO",
        code: "ro",
        country: "RO",
        name: "Romanian",
        dir: "ltr",
        locale: "Română"
    },
    {
        lang: "ru-RU",
        code: "ru",
        country: "RU",
        name: "Russian",
        dir: "ltr",
        locale: "Русский"
    },
    {
        lang: "rw-RW",
        code: "rw",
        country: "RW",
        name: "Kinyarwanda",
        dir: "ltr",
        locale: "Ikinyarwanda"
    },
    {
        lang: "en-KN",
        code: "en",
        country: "KN",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-LC",
        code: "en",
        country: "LC",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-VC",
        code: "en",
        country: "VC",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "sm-WS",
        code: "sm",
        country: "WS",
        name: "Samoan",
        dir: "ltr",
        locale: "Gagana Samoa"
    },
    {
        lang: "it-SM",
        code: "it",
        country: "SM",
        name: "Italian",
        dir: "ltr",
        locale: "Italiano"
    },
    {
        lang: "pt-ST",
        code: "pt",
        country: "ST",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "ar-SA",
        code: "ar",
        country: "SA",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "fr-SN",
        code: "fr",
        country: "SN",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "sr-RS",
        code: "sr",
        country: "RS",
        name: "Serbian",
        dir: "ltr",
        locale: "Српски"
    },
    {
        lang: "en-SC",
        code: "en",
        country: "SC",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-SL",
        code: "en",
        country: "SL",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-SG",
        code: "en",
        country: "SG",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "sk-SK",
        code: "sk",
        country: "SK",
        name: "Slovak",
        dir: "ltr",
        locale: "Slovenčina"
    },
    {
        lang: "sl-SI",
        code: "sl",
        country: "SI",
        name: "Slovenian",
        dir: "ltr",
        locale: "Slovenščina"
    },
    {
        lang: "en-SB",
        code: "en",
        country: "SB",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "so-SO",
        code: "so",
        country: "SO",
        name: "Somali",
        dir: "ltr",
        locale: "Soomaali"
    },
    {
        lang: "af-ZA",
        code: "af",
        country: "ZA",
        name: "Afrikaans",
        dir: "ltr",
        locale: "Afrikaans"
    },
    {
        lang: "en-SS",
        code: "en",
        country: "SS",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-ES",
        code: "es",
        country: "ES",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "si-LK",
        code: "si",
        country: "LK",
        name: "Sinhala",
        dir: "ltr",
        locale: "සිංහල"
    },
    {
        lang: "ar-SD",
        code: "ar",
        country: "SD",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "nl-SR",
        code: "nl",
        country: "SR",
        name: "Dutch",
        dir: "ltr",
        locale: "Nederlands"
    },
    {
        lang: "sv-SE",
        code: "sv",
        country: "SE",
        name: "Swedish",
        dir: "ltr",
        locale: "Svenska"
    },
    {
        lang: "de-CH",
        code: "de",
        country: "CH",
        name: "German",
        dir: "ltr",
        locale: "Deutsch"
    },
    {
        lang: "ar-SY",
        code: "ar",
        country: "SY",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "tg-TJ",
        code: "tg",
        country: "TJ",
        name: "Tajik",
        dir: "ltr",
        locale: "Тоҷикӣ"
    },
    {
        lang: "sw-TZ",
        code: "sw",
        country: "TZ",
        name: "Swahili",
        dir: "ltr",
        locale: "Kiswahili"
    },
    {
        lang: "th-TH",
        code: "th",
        country: "TH",
        name: "Thai",
        dir: "ltr",
        locale: "ไทย"
    },
    {
        lang: "pt-TL",
        code: "pt",
        country: "TL",
        name: "Portuguese",
        dir: "ltr",
        locale: "Português"
    },
    {
        lang: "fr-TG",
        code: "fr",
        country: "TG",
        name: "French",
        dir: "ltr",
        locale: "Français"
    },
    {
        lang: "to-TO",
        code: "to",
        country: "TO",
        name: "Tongan",
        dir: "ltr",
        locale: "Lea Faka-Tonga"
    },
    {
        lang: "en-TT",
        code: "en",
        country: "TT",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "ar-TN",
        code: "ar",
        country: "TN",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "tr-TR",
        code: "tr",
        country: "TR",
        name: "Turkish",
        dir: "ltr",
        locale: "Türkçe"
    },
    {
        lang: "tk-TM",
        code: "tk",
        country: "TM",
        name: "Turkmen",
        dir: "ltr",
        locale: "Türkmen"
    },
    {
        lang: "en-TV",
        code: "en",
        country: "TV",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-UG",
        code: "en",
        country: "UG",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "uk-UA",
        code: "uk",
        country: "UA",
        name: "Ukrainian",
        dir: "ltr",
        locale: "Українська"
    },
    {
        lang: "ar-AE",
        code: "ar",
        country: "AE",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "en-GB",
        code: "en",
        country: "GB",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-US",
        code: "en",
        country: "US",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "es-UY",
        code: "es",
        country: "UY",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "uz-UZ",
        code: "uz",
        country: "UZ",
        name: "Uzbek",
        dir: "ltr",
        locale: "Oʻzbek"
    },
    {
        lang: "bi-VU",
        code: "bi",
        country: "VU",
        name: "Bislama",
        dir: "ltr",
        locale: "Bislama"
    },
    {
        lang: "it-VA",
        code: "it",
        country: "VA",
        name: "Italian",
        dir: "ltr",
        locale: "Italiano"
    },
    {
        lang: "es-VE",
        code: "es",
        country: "VE",
        name: "Spanish",
        dir: "ltr",
        locale: "Español"
    },
    {
        lang: "vi-VN",
        code: "vi",
        country: "VN",
        name: "Vietnamese",
        dir: "ltr",
        locale: "Tiếng Việt"
    },
    {
        lang: "ar-YE",
        code: "ar",
        country: "YE",
        name: "Arabic",
        dir: "rtl",
        locale: "العربية"
    },
    {
        lang: "en-ZM",
        code: "en",
        country: "ZM",
        name: "English",
        dir: "ltr",
        locale: "English"
    },
    {
        lang: "en-ZW",
        code: "en",
        country: "ZW",
        name: "English",
        dir: "ltr",
        locale: "English"
    }
];
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-value.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.AllLanguageCodes = exports.ConstValue = void 0;
exports.ConstValue = {
    // Logical operators
    AND: '&&',
    OR: '||',
    NOT: '!',
    // Common special characters
    AT: '@',
    HASH: '#',
    DOLLAR: '$',
    PERCENT: '%',
    CARET: '^',
    AMPERSAND: '&',
    ASTERISK: '*',
    TILDE: '~',
    COLON: ':',
    SEMICOLON: ';',
    DOUBLE_QUOTE: '"',
    SINGLE_QUOTE: "'",
    COMMA: ',',
    PERIOD: '.',
    SLASH: '/',
    QUESTION_MARK: '?',
    PLUS: '+',
    UNDERSCORE: '_',
    HYPHEN: '-',
    EQUALS: '=',
    BACKSLASH: '\\',
    PIPE: '|',
    // Space
    SPACE: ' ',
    EMPTY: '',
    // Other
    TRUE: 'true',
    FALSE: 'false',
    NULL: 'null',
    UNDEFINED: 'undefined',
    STR_AND: 'AND',
    STR_OR: 'OR',
    STR_NOT: 'NOT',
    ASC: 'ASC',
    DESC: 'DESC',
    LTR: 'ltr',
    RTL: 'rtl',
    AM: 'AM',
    PM: 'PM',
    LIGHT: 'light',
    DARK: 'dark',
    MonthNames: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec"
    ]
};
exports.AllLanguageCodes = [
    "ps-AF",
    "sq-AL",
    "ar-DZ",
    "ca-AD",
    "pt-AO",
    "en-AG",
    "es-AR",
    "hy-AM",
    "en-AU",
    "de-AT",
    "az-AZ",
    "en-BS",
    "ar-BH",
    "bn-BD",
    "en-BB",
    "be-BY",
    "nl-BE",
    "en-BZ",
    "fr-BJ",
    "dz-BT",
    "es-BO",
    "bs-BA",
    "en-BW",
    "pt-BR",
    "ms-BN",
    "bg-BG",
    "fr-BF",
    "rn-BI",
    "pt-CV",
    "km-KH",
    "fr-CM",
    "en-CA",
    "fr-CF",
    "fr-TD",
    "es-CL",
    "zh-CN",
    "es-CO",
    "ar-KM",
    "fr-CG",
    "fr-CD",
    "es-CR",
    "fr-CI",
    "hr-HR",
    "es-CU",
    "el-CY",
    "cs-CZ",
    "da-DK",
    "fr-DJ",
    "en-DM",
    "es-DO",
    "es-EC",
    "ar-EG",
    "es-SV",
    "es-GQ",
    "ti-ER",
    "et-EE",
    "si-SZ",
    "am-ET",
    "en-FJ",
    "fi-FI",
    "fr-FR",
    "fr-GA",
    "en-GM",
    "ka-GE",
    "de-DE",
    "en-GH",
    "el-GR",
    "en-GD",
    "es-GT",
    "fr-GN",
    "pt-GW",
    "en-GY",
    "fr-HT",
    "es-HN",
    "hu-HU",
    "is-IS",
    "hi-IN",
    "kn-IN",
    "ta-IN",
    "te-IN",
    "bn-IN",
    "mr-IN",
    "gu-IN",
    "ml-IN",
    "pa-IN",
    "or-IN",
    "as-IN",
    "id-ID",
    "fa-IR",
    "ar-IQ",
    "ga-IE",
    "he-IL",
    "it-IT",
    "en-JM",
    "ja-JP",
    "ar-JO",
    "kk-KZ",
    "sw-KE",
    "en-KI",
    "ko-KP",
    "ko-KR",
    "ar-KW",
    "ky-KG",
    "lo-LA",
    "lv-LV",
    "ar-LB",
    "st-LS",
    "en-LR",
    "ar-LY",
    "de-LI",
    "lt-LT",
    "fr-LU",
    "mg-MG",
    "ny-MW",
    "ms-MY",
    "dv-MV",
    "fr-ML",
    "mt-MT",
    "en-MH",
    "ar-MR",
    "en-MU",
    "es-MX",
    "en-FM",
    "ro-MD",
    "fr-MC",
    "mn-MN",
    "sr-ME",
    "ar-MA",
    "pt-MZ",
    "my-MM",
    "en-NA",
    "en-NR",
    "ne-NP",
    "nl-NL",
    "en-NZ",
    "es-NI",
    "fr-NE",
    "en-NG",
    "yo-NG",
    "ha-NG",
    "ig-NG",
    "en-NU",
    "nb-NO",
    "ar-OM",
    "ur-PK",
    "en-PW",
    "ar-PS",
    "es-PA",
    "en-PG",
    "es-PY",
    "es-PE",
    "tl-PH",
    "pl-PL",
    "pt-PT",
    "ar-QA",
    "ro-RO",
    "ru-RU",
    "rw-RW",
    "en-KN",
    "en-LC",
    "en-VC",
    "sm-WS",
    "it-SM",
    "pt-ST",
    "ar-SA",
    "fr-SN",
    "sr-RS",
    "en-SC",
    "en-SL",
    "en-SG",
    "sk-SK",
    "sl-SI",
    "en-SB",
    "so-SO",
    "af-ZA",
    "en-SS",
    "es-ES",
    "si-LK",
    "ar-SD",
    "nl-SR",
    "sv-SE",
    "de-CH",
    "ar-SY",
    "tg-TJ",
    "sw-TZ",
    "th-TH",
    "pt-TL",
    "fr-TG",
    "to-TO",
    "en-TT",
    "ar-TN",
    "tr-TR",
    "tk-TM",
    "en-TV",
    "en-UG",
    "uk-UA",
    "ar-AE",
    "en-GB",
    "en-US",
    "es-UY",
    "uz-UZ",
    "bi-VU",
    "it-VA",
    "es-VE",
    "vi-VN",
    "ar-YE",
    "en-ZM",
    "en-ZW"
];
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/util.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.CurrencyConvert = exports.LangCountryCode = exports.LangText = exports.TimeAgo = exports.DateAndTime = exports.DateTime12HrFormat = exports.DateTime24HrFormat = exports.TruncateText = exports.AppUUID4 = exports.AppAddDays = exports.AppDaysBack = exports.AppCode = exports.AppCodeByType = exports.AppUniqueCode = exports.AppRandomString = void 0;
exports.EncodeBase64 = EncodeBase64;
exports.DecodeBase64 = DecodeBase64;
exports.EncodeURL = EncodeURL;
exports.DecodeURL = DecodeURL;
exports.SafeEncode = SafeEncode;
exports.SafeDecode = SafeDecode;
const randomstring_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/randomstring/index.js [app-client] (ecmascript)");
const reg_exr_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/reg-exr.js [app-client] (ecmascript)");
const countries_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/countries.js [app-client] (ecmascript)");
const languages_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/languages.js [app-client] (ecmascript)");
const const_value_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-value.js [app-client] (ecmascript)");
const AppRandomString = (length, charset)=>{
    return (0, randomstring_1.generate)({
        length: length,
        charset: charset
    });
};
exports.AppRandomString = AppRandomString;
let uniqueId = 0;
const AppUniqueCode = ()=>{
    let time = new Date().getTime();
    if (uniqueId == time) {
        while(new Date().getTime() < 1 + time){}
        time = new Date().getTime();
    }
    uniqueId = time;
    return time.toString(36).toUpperCase();
};
exports.AppUniqueCode = AppUniqueCode;
const AppCodeByType = (name, type = null)=>{
    let str = "";
    if (type) {
        str = type + "_" + name;
    } else {
        str = name + "_" + (0, exports.AppUniqueCode)();
    }
    str = str.replace(reg_exr_1.RegExp.NON_ALPHA_NUMERIC, "_");
    str = str.replace(/\s/g, "_");
    str = str.substr(0, 128);
    return str.toUpperCase();
};
exports.AppCodeByType = AppCodeByType;
const AppCode = (name)=>{
    if (name == null) return null;
    let str = "";
    str = name.trim();
    str = str.replace(reg_exr_1.RegExp.NON_ALPHA_NUMERIC, "_");
    str = str.replace(/\s/g, "_");
    return str.toUpperCase();
};
exports.AppCode = AppCode;
const AppDaysBack = (date, backValue, isDays = true)=>{
    date = new Date(date);
    if (isDays) {
        date.setDate(date.getDate() - backValue);
    } else {
        date.setMilliseconds(date.getMilliseconds() - backValue);
    }
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return date;
};
exports.AppDaysBack = AppDaysBack;
const AppAddDays = (date, addDays, isDays = true)=>{
    date = new Date(date);
    if (isDays) {
        date.setDate(date.getDate() + addDays);
    } else {
        date.setMilliseconds(date.getMilliseconds() + addDays);
    }
    date = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return date;
};
exports.AppAddDays = AppAddDays;
const AppUUID4 = ()=>{
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
        const r = Math.random() * 16 | 0;
        const v = c == "x" ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
};
exports.AppUUID4 = AppUUID4;
const TruncateText = (input, maxLength)=>{
    if ((input === null || input === void 0 ? void 0 : input.length) > maxLength) {
        return input.substring(0, maxLength) + "...";
    }
    return input;
};
exports.TruncateText = TruncateText;
const DateTime24HrFormat = (time)=>{
    const [timeStr, modifier] = time.split(" ");
    let [hours, minutes] = timeStr.split(":").map(Number);
    if (modifier === "AM") {
        if (hours === 12) hours = 0;
    } else if (modifier === "PM") {
        if (hours !== 12) hours += 12;
    }
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:00`;
};
exports.DateTime24HrFormat = DateTime24HrFormat;
const DateTime12HrFormat = (timestamp, showDate = true, showTime)=>{
    const newDate = new Date(timestamp);
    const months = const_value_1.ConstValue.MonthNames;
    const day = String(newDate.getDate()).padStart(2, "0");
    const month = months[newDate.getMonth()];
    const year = newDate.getFullYear();
    let hours = newDate.getHours();
    const minutes = String(newDate.getMinutes()).padStart(2, "0");
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;
    const date = showDate ? `${day} ${month} ${year}` : "";
    const time = showTime ? `${hours}:${minutes} ${ampm}` : "";
    return `${date} ${time}`;
};
exports.DateTime12HrFormat = DateTime12HrFormat;
const DateAndTime = (dateString, timeString)=>{
    if (!dateString) return null;
    const validTimeString = timeString || "00:00:00";
    const combined = new Date(`${dateString}T${validTimeString}Z`);
    return isNaN(combined.getTime()) ? null : combined;
};
exports.DateAndTime = DateAndTime;
const TimeAgo = (date)=>{
    const now = new Date().getTime();
    const diff = now - new Date(date).getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (days > 1) return `${days} days ago`;
    if (days === 1) return "1 day ago";
    if (hours > 1) return `${hours} hours ago`;
    if (hours === 1) return "1 hour ago";
    if (minutes > 1) return `${minutes} minutes ago`;
    if (minutes === 1) return "1 minute ago";
    return "Just now";
};
exports.TimeAgo = TimeAgo;
const LangText = (data, source, target)=>__awaiter(void 0, void 0, void 0, function*() {
        if (!data || !source || !target) {
            throw new Error("Invalid input: data, source, or target is missing");
        }
        const src = source.split("-")[0]; // e.g., "en-US" -> "en"
        const tgt = target.split("-")[0]; // e.g., "te-IN" -> "te"
        if (!/^[a-zA-Z]{2}$/.test(src) || !/^[a-zA-Z]{2}$/.test(tgt)) {
            throw new Error("Invalid language code format");
        }
        const encodedData = encodeURIComponent(data);
        const url = `https://lingva.ml/api/v1/${src}/${tgt}/${encodedData}`;
        const res = yield fetch(url, {
            method: "GET"
        });
        if (!res.ok) {
            throw new Error(`Translation failed: ${res.status} ${res.statusText}`);
        }
        const json = yield res.json();
        if (json.error) {
            throw new Error(`API error: ${json.error}`);
        }
        return json.translation || "";
    });
exports.LangText = LangText;
const LangCountryCode = (lang)=>{
    const countryCode = lang.split("-")[1];
    const country = countries_1.countries.find((c)=>c.code === countryCode) || {};
    const language = languages_1.languages.find((l)=>l.lang === lang) || {};
    return {
        lang: lang,
        country: countryCode,
        name: language.name,
        locale: language.locale,
        currencyCode: country.currencyCode,
        currency: country.currency,
        telCode: country.telCode,
        flag: country.flag,
        dir: language.dir
    };
};
exports.LangCountryCode = LangCountryCode;
const CurrencyConvert = (from, to)=>__awaiter(void 0, void 0, void 0, function*() {
        if (!from || !to) {
            throw new Error("Invalid input: from or to is missing");
        }
        if (from === to) {
            return 1;
        }
        try {
            const url = `https://api.frankfurter.app/latest?from=${from}&to=${to}`;
            const res = yield fetch(url, {
                method: "GET"
            });
            if (!res.ok) {
                throw new Error(`Currency conversion failed: ${res.status} ${res.statusText}`);
            }
            const json = yield res.json();
            return json.rates[to];
        } catch (error) {
            throw new Error(`Currency conversion failed: ${error}`);
        }
    });
exports.CurrencyConvert = CurrencyConvert;
function EncodeBase64(input) {
    return btoa(input);
}
function DecodeBase64(encoded) {
    return atob(encoded);
}
function EncodeURL(input) {
    try {
        const decoded = decodeURIComponent(input);
        return encodeURIComponent(decoded);
    } catch (_a) {
        return encodeURIComponent(input);
    }
}
function DecodeURL(input) {
    try {
        return decodeURIComponent(input);
    } catch (_a) {
        return input;
    }
}
function SafeEncode(input) {
    return EncodeURL(EncodeBase64(input));
}
function SafeDecode(encoded) {
    return DecodeBase64(DecodeURL(encoded));
}
}),
"[project]/Documents/react-project/timesheet/node_modules/ts.cryptojs256/ts.cryptojs256.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

/*
CryptoJS v3.1.2
code.google.com/p/crypto-js
(c) 2009-2013 by Jeff Mott. All rights reserved.
code.google.com/p/crypto-js/wiki/License
*/ var CryptoJS = CryptoJS || function(h, s) {
    var f = {}, g = f.lib = {}, q = function() {}, m = g.Base = {
        extend: function(a) {
            q.prototype = this;
            var c = new q;
            a && c.mixIn(a);
            c.hasOwnProperty("init") || (c.init = function() {
                c.$super.init.apply(this, arguments);
            });
            c.init.prototype = c;
            c.$super = this;
            return c;
        },
        create: function() {
            var a = this.extend();
            a.init.apply(a, arguments);
            return a;
        },
        init: function() {},
        mixIn: function(a) {
            for(var c in a)a.hasOwnProperty(c) && (this[c] = a[c]);
            a.hasOwnProperty("toString") && (this.toString = a.toString);
        },
        clone: function() {
            return this.init.prototype.extend(this);
        }
    }, r = g.WordArray = m.extend({
        init: function(a, c) {
            a = this.words = a || [];
            this.sigBytes = c != s ? c : 4 * a.length;
        },
        toString: function(a) {
            return (a || k).stringify(this);
        },
        concat: function(a) {
            var c = this.words, d = a.words, b = this.sigBytes;
            a = a.sigBytes;
            this.clamp();
            if (b % 4) for(var e = 0; e < a; e++)c[b + e >>> 2] |= (d[e >>> 2] >>> 24 - 8 * (e % 4) & 255) << 24 - 8 * ((b + e) % 4);
            else if (65535 < d.length) for(e = 0; e < a; e += 4)c[b + e >>> 2] = d[e >>> 2];
            else c.push.apply(c, d);
            this.sigBytes += a;
            return this;
        },
        clamp: function() {
            var a = this.words, c = this.sigBytes;
            a[c >>> 2] &= 4294967295 << 32 - 8 * (c % 4);
            a.length = h.ceil(c / 4);
        },
        clone: function() {
            var a = m.clone.call(this);
            a.words = this.words.slice(0);
            return a;
        },
        random: function(a) {
            for(var c = [], d = 0; d < a; d += 4)c.push(4294967296 * h.random() | 0);
            return new r.init(c, a);
        }
    }), l = f.enc = {}, k = l.Hex = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for(var d = [], b = 0; b < a; b++){
                var e = c[b >>> 2] >>> 24 - 8 * (b % 4) & 255;
                d.push((e >>> 4).toString(16));
                d.push((e & 15).toString(16));
            }
            return d.join("");
        },
        parse: function(a) {
            for(var c = a.length, d = [], b = 0; b < c; b += 2)d[b >>> 3] |= parseInt(a.substr(b, 2), 16) << 24 - 4 * (b % 8);
            return new r.init(d, c / 2);
        }
    }, n = l.Latin1 = {
        stringify: function(a) {
            var c = a.words;
            a = a.sigBytes;
            for(var d = [], b = 0; b < a; b++)d.push(String.fromCharCode(c[b >>> 2] >>> 24 - 8 * (b % 4) & 255));
            return d.join("");
        },
        parse: function(a) {
            for(var c = a.length, d = [], b = 0; b < c; b++)d[b >>> 2] |= (a.charCodeAt(b) & 255) << 24 - 8 * (b % 4);
            return new r.init(d, c);
        }
    }, j = l.Utf8 = {
        stringify: function(a) {
            try {
                return decodeURIComponent(escape(n.stringify(a)));
            } catch (c) {
                throw Error("Malformed UTF-8 data");
            }
        },
        parse: function(a) {
            return n.parse(unescape(encodeURIComponent(a)));
        }
    }, u = g.BufferedBlockAlgorithm = m.extend({
        reset: function() {
            this._data = new r.init;
            this._nDataBytes = 0;
        },
        _append: function(a) {
            "string" == typeof a && (a = j.parse(a));
            this._data.concat(a);
            this._nDataBytes += a.sigBytes;
        },
        _process: function(a) {
            var c = this._data, d = c.words, b = c.sigBytes, e = this.blockSize, f = b / (4 * e), f = a ? h.ceil(f) : h.max((f | 0) - this._minBufferSize, 0);
            a = f * e;
            b = h.min(4 * a, b);
            if (a) {
                for(var g = 0; g < a; g += e)this._doProcessBlock(d, g);
                g = d.splice(0, a);
                c.sigBytes -= b;
            }
            return new r.init(g, b);
        },
        clone: function() {
            var a = m.clone.call(this);
            a._data = this._data.clone();
            return a;
        },
        _minBufferSize: 0
    });
    g.Hasher = u.extend({
        cfg: m.extend(),
        init: function(a) {
            this.cfg = this.cfg.extend(a);
            this.reset();
        },
        reset: function() {
            u.reset.call(this);
            this._doReset();
        },
        update: function(a) {
            this._append(a);
            this._process();
            return this;
        },
        finalize: function(a) {
            a && this._append(a);
            return this._doFinalize();
        },
        blockSize: 16,
        _createHelper: function(a) {
            return function(c, d) {
                return new a.init(d).finalize(c);
            };
        },
        _createHmacHelper: function(a) {
            return function(c, d) {
                return new t.HMAC.init(a, d).finalize(c);
            };
        }
    });
    var t = f.algo = {};
    return f;
}(Math);
(function(h) {
    for(var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function(a) {
        return 4294967296 * (a - (a | 0)) | 0;
    }, k = 2, n = 0; 64 > n;){
        var j;
        a: {
            j = k;
            for(var u = h.sqrt(j), t = 2; t <= u; t++)if (!(j % t)) {
                j = !1;
                break a;
            }
            j = !0;
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++;
    }
    var a = [], f = f.SHA256 = q.extend({
        _doReset: function() {
            this._hash = new g.init(m.slice(0));
        },
        _doProcessBlock: function(c, d) {
            for(var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++){
                if (16 > p) a[p] = c[d + p] | 0;
                else {
                    var k = a[p - 15], l = a[p - 2];
                    a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
                }
                k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                q = n;
                n = m;
                m = h;
                h = j + k | 0;
                j = g;
                g = f;
                f = e;
                e = k + l | 0;
            }
            b[0] = b[0] + e | 0;
            b[1] = b[1] + f | 0;
            b[2] = b[2] + g | 0;
            b[3] = b[3] + j | 0;
            b[4] = b[4] + h | 0;
            b[5] = b[5] + m | 0;
            b[6] = b[6] + n | 0;
            b[7] = b[7] + q | 0;
        },
        _doFinalize: function() {
            var a = this._data, d = a.words, b = 8 * this._nDataBytes, e = 8 * a.sigBytes;
            d[e >>> 5] |= 128 << 24 - e % 32;
            d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
            d[(e + 64 >>> 9 << 4) + 15] = b;
            a.sigBytes = 4 * d.length;
            this._process();
            return this._hash;
        },
        clone: function() {
            var a = q.clone.call(this);
            a._hash = this._hash.clone();
            return a;
        }
    });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f);
})(Math);
(function() {
    var h = CryptoJS, s = h.enc.Utf8;
    h.algo.HMAC = h.lib.Base.extend({
        init: function(f, g) {
            f = this._hasher = new f.init;
            "string" == typeof g && (g = s.parse(g));
            var h = f.blockSize, m = 4 * h;
            g.sigBytes > m && (g = f.finalize(g));
            g.clamp();
            for(var r = this._oKey = g.clone(), l = this._iKey = g.clone(), k = r.words, n = l.words, j = 0; j < h; j++)k[j] ^= 1549556828, n[j] ^= 909522486;
            r.sigBytes = l.sigBytes = m;
            this.reset();
        },
        reset: function() {
            var f = this._hasher;
            f.reset();
            f.update(this._iKey);
        },
        update: function(f) {
            this._hasher.update(f);
            return this;
        },
        finalize: function(f) {
            var g = this._hasher;
            f = g.finalize(f);
            g.reset();
            return g.finalize(this._oKey.clone().concat(f));
        }
    });
})();
(function() {
    var h = CryptoJS, j = h.lib.WordArray;
    h.enc.Base64 = {
        stringify: function(b) {
            var e = b.words, f = b.sigBytes, c = this._map;
            b.clamp();
            b = [];
            for(var a = 0; a < f; a += 3)for(var d = (e[a >>> 2] >>> 24 - 8 * (a % 4) & 255) << 16 | (e[a + 1 >>> 2] >>> 24 - 8 * ((a + 1) % 4) & 255) << 8 | e[a + 2 >>> 2] >>> 24 - 8 * ((a + 2) % 4) & 255, g = 0; 4 > g && a + 0.75 * g < f; g++)b.push(c.charAt(d >>> 6 * (3 - g) & 63));
            if (e = c.charAt(64)) for(; b.length % 4;)b.push(e);
            return b.join("");
        },
        parse: function(b) {
            var e = b.length, f = this._map, c = f.charAt(64);
            c && (c = b.indexOf(c), -1 != c && (e = c));
            for(var c = [], a = 0, d = 0; d < e; d++)if (d % 4) {
                var g = f.indexOf(b.charAt(d - 1)) << 2 * (d % 4), h = f.indexOf(b.charAt(d)) >>> 6 - 2 * (d % 4);
                c[a >>> 2] |= (g | h) << 24 - 8 * (a % 4);
                a++;
            }
            return j.create(c, a);
        },
        _map: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
    };
})();
(function(h) {
    for(var s = CryptoJS, f = s.lib, g = f.WordArray, q = f.Hasher, f = s.algo, m = [], r = [], l = function(a) {
        return 4294967296 * (a - (a | 0)) | 0;
    }, k = 2, n = 0; 64 > n;){
        var j;
        a: {
            j = k;
            for(var u = h.sqrt(j), t = 2; t <= u; t++)if (!(j % t)) {
                j = !1;
                break a;
            }
            j = !0;
        }
        j && (8 > n && (m[n] = l(h.pow(k, 0.5))), r[n] = l(h.pow(k, 1 / 3)), n++);
        k++;
    }
    var a = [], f = f.SHA256 = q.extend({
        _doReset: function() {
            this._hash = new g.init(m.slice(0));
        },
        _doProcessBlock: function(c, d) {
            for(var b = this._hash.words, e = b[0], f = b[1], g = b[2], j = b[3], h = b[4], m = b[5], n = b[6], q = b[7], p = 0; 64 > p; p++){
                if (16 > p) a[p] = c[d + p] | 0;
                else {
                    var k = a[p - 15], l = a[p - 2];
                    a[p] = ((k << 25 | k >>> 7) ^ (k << 14 | k >>> 18) ^ k >>> 3) + a[p - 7] + ((l << 15 | l >>> 17) ^ (l << 13 | l >>> 19) ^ l >>> 10) + a[p - 16];
                }
                k = q + ((h << 26 | h >>> 6) ^ (h << 21 | h >>> 11) ^ (h << 7 | h >>> 25)) + (h & m ^ ~h & n) + r[p] + a[p];
                l = ((e << 30 | e >>> 2) ^ (e << 19 | e >>> 13) ^ (e << 10 | e >>> 22)) + (e & f ^ e & g ^ f & g);
                q = n;
                n = m;
                m = h;
                h = j + k | 0;
                j = g;
                g = f;
                f = e;
                e = k + l | 0;
            }
            b[0] = b[0] + e | 0;
            b[1] = b[1] + f | 0;
            b[2] = b[2] + g | 0;
            b[3] = b[3] + j | 0;
            b[4] = b[4] + h | 0;
            b[5] = b[5] + m | 0;
            b[6] = b[6] + n | 0;
            b[7] = b[7] + q | 0;
        },
        _doFinalize: function() {
            var a = this._data, d = a.words, b = 8 * this._nDataBytes, e = 8 * a.sigBytes;
            d[e >>> 5] |= 128 << 24 - e % 32;
            d[(e + 64 >>> 9 << 4) + 14] = h.floor(b / 4294967296);
            d[(e + 64 >>> 9 << 4) + 15] = b;
            a.sigBytes = 4 * d.length;
            this._process();
            return this._hash;
        },
        clone: function() {
            var a = q.clone.call(this);
            a._hash = this._hash.clone();
            return a;
        }
    });
    s.SHA256 = q._createHelper(f);
    s.HmacSHA256 = q._createHmacHelper(f);
})(Math);
/* ---------------- PUBLIC INTERFACE ---------------- */ exports.enc = {
    Base64: CryptoJS.enc.Base64,
    Utf8: CryptoJS.enc.Utf8,
    Latin1: CryptoJS.enc.Latin1
};
exports.SHA256 = CryptoJS.SHA256;
exports.HmacSHA256 = CryptoJS.HmacSHA256;
}),
"[project]/Documents/react-project/timesheet/node_modules/jwt-encode/src/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {

const CryptoJS = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/ts.cryptojs256/ts.cryptojs256.js [app-client] (ecmascript)");
/**
 * Default options for JWT signature
 */ const defaultHeader = {
    alg: 'HS256',
    typ: 'JWT'
};
/**
 * Return a base64 URL
 *
 * @param {string} data - some data to be base64 encoded
 * @return {string} A base64url encoded string
 */ function base64url(data) {
    return CryptoJS.enc.Base64.stringify(data).replace(/=+$/, '').replace(/\+/g, '-').replace(/\//g, '_');
}
/**
 * Create a very basic JWT signature
 *
 * @param {Object} data - the data object you want to have signed
 * @param {string} secret - secret to use to sign token with
 * @param {Object} options - JWT header options
 * @return {string} JSON Web Token that has been signed
 */ function sign(data, secret, options = {}) {
    const header = Object.assign(defaultHeader, options);
    if (header.alg !== 'HS256' && header.typ !== 'JWT') {
        throw new Error('jwt-encode only support the HS256 algorithm and the JWT type of hash');
    }
    const encodedHeader = encode(header);
    const encodedData = encode(data);
    let signature = `${encodedHeader}.${encodedData}`;
    signature = CryptoJS.HmacSHA256(signature, secret);
    signature = base64url(signature);
    return `${encodedHeader}.${encodedData}.${signature}`;
}
/**
 *  Safely base64url encode a JS Object in a way that is UTF-8 safe
 *
 *  @param {Object} Javascript object payload to be encoded
 *  @return {string} utf-8 safe base64url encoded payload
 */ function encode(data) {
    const stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
    return base64url(stringifiedData);
}
module.exports = sign;
}),
"[project]/Documents/react-project/timesheet/node_modules/jwt-decode/build/cjs/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.jwtDecode = exports.InvalidTokenError = void 0;
class InvalidTokenError extends Error {
}
exports.InvalidTokenError = InvalidTokenError;
InvalidTokenError.prototype.name = "InvalidTokenError";
function b64DecodeUnicode(str) {
    return decodeURIComponent(atob(str).replace(/(.)/g, (m, p)=>{
        let code = p.charCodeAt(0).toString(16).toUpperCase();
        if (code.length < 2) {
            code = "0" + code;
        }
        return "%" + code;
    }));
}
function base64UrlDecode(str) {
    let output = str.replace(/-/g, "+").replace(/_/g, "/");
    switch(output.length % 4){
        case 0:
            break;
        case 2:
            output += "==";
            break;
        case 3:
            output += "=";
            break;
        default:
            throw new Error("base64 string is not of the correct length");
    }
    try {
        return b64DecodeUnicode(output);
    } catch (err) {
        return atob(output);
    }
}
function jwtDecode(token, options) {
    if (typeof token !== "string") {
        throw new InvalidTokenError("Invalid token specified: must be a string");
    }
    options || (options = {});
    const pos = options.header === true ? 0 : 1;
    const part = token.split(".")[pos];
    if (typeof part !== "string") {
        throw new InvalidTokenError(`Invalid token specified: missing part #${pos + 1}`);
    }
    let decoded;
    try {
        decoded = base64UrlDecode(part);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid base64 for part #${pos + 1} (${e.message})`);
    }
    try {
        return JSON.parse(decoded);
    } catch (e) {
        throw new InvalidTokenError(`Invalid token specified: invalid json for part #${pos + 1} (${e.message})`);
    }
}
exports.jwtDecode = jwtDecode;
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/jwt-util.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __importDefault = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__importDefault || function(mod) {
    return mod && mod.__esModule ? mod : {
        "default": mod
    };
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.JwtValid = exports.JwtDecode = exports.JwtVerify = exports.JwtEncode = void 0;
const jwt_encode_1 = __importDefault(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/jwt-encode/src/index.js [app-client] (ecmascript)"));
const jwt_decode_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/jwt-decode/build/cjs/index.js [app-client] (ecmascript)");
/**
 * Encode JWT Token with secret key, expiresIn in seconds (86400 = 1 day) default
 * @param data
 * @param secret
 * @param expiresIn
 * @returns
 */ const JwtEncode = (data, secret, expiresIn = 86400)=>{
    try {
        const exp = Math.floor(Date.now() / 1000) + expiresIn;
        const payload = Object.assign(Object.assign({}, data), {
            exp
        });
        const token = (0, jwt_encode_1.default)(payload, secret);
        return token;
    } catch (err) {
        console.error('Error encoding JWT:', err);
        throw new Error('Error encoding JWT');
    }
};
exports.JwtEncode = JwtEncode;
/**
 * Verify JWT token with secret
 * @param token
 * @param secret
 * @returns
 */ const JwtVerify = (token, secret)=>{
    if (token) {
        try {
            token = token.replace(/jwt |JWT |Bearer |bearer |BEARER /g, '');
            const decoded = (0, jwt_decode_1.jwtDecode)(token);
            const currentTime = Math.floor(Date.now() / 1000);
            // Check if token is expired
            if (decoded.exp && decoded.exp < currentTime) {
                throw new Error('Token has expired');
            }
            // Since `jwt-encode` doesn't provide signature verification, manually check if the payload matches.
            const regeneratedToken = (0, jwt_encode_1.default)(decoded, secret);
            if (token !== regeneratedToken) {
                throw new Error('Token is not valid');
            }
            return decoded;
        } catch (err) {
            console.error('Invalid JWT:', err);
            throw new Error('Token is not valid');
        }
    } else {
        throw new Error('Auth token is not supplied');
    }
};
exports.JwtVerify = JwtVerify;
/**
 * Decode JWT Token without verification
 * @param token
 * @returns
 */ const JwtDecode = (token)=>{
    if (token) {
        try {
            token = token.replace(/jwt |JWT |Bearer |bearer |BEARER /g, '');
            const decoded = (0, jwt_decode_1.jwtDecode)(token);
            return decoded;
        } catch (err) {
            console.error('Error decoding JWT:', err);
            throw new Error('Token is not valid');
        }
    } else {
        throw new Error('Auth token is not supplied');
    }
};
exports.JwtDecode = JwtDecode;
/**
 * Check if token is expired or not
 * @param token
 * @returns
 */ const JwtValid = (token)=>{
    try {
        if (!token) {
            return false;
        }
        const decoded = (0, jwt_decode_1.jwtDecode)(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return !(decoded.exp && decoded.exp < currentTime);
    } catch (error) {
        console.error('Invalid JWT:', error);
        return false;
    }
};
exports.JwtValid = JwtValid;
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-keys.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConstKeys = void 0;
exports.ConstKeys = {
    // Validation messages
    REQUIRED: 'REQUIRED',
    MIN_LENGTH_REQUIRED: 'MIN_LENGTH_REQUIRED',
    MAX_LENGTH_EXCEED: 'MAX_LENGTH_EXCEED',
    INVALID_DATA: 'INVALID_DATA',
    FIELD_MUST_BE_NUMERIC: 'FIELD_MUST_BE_NUMERIC',
    FIELD_MUST_BE_ALPHABETIC: 'FIELD_MUST_BE_ALPHABETIC',
    FIELD_MUST_BE_ALPHANUMERIC: 'FIELD_MUST_BE_ALPHANUMERIC',
    INVALID_EMAIL: 'INVALID_EMAIL',
    INVALID_PHONE: 'INVALID_PHONE',
    PASSWORD_TOO_WEAK: 'PASSWORD_TOO_WEAK',
    PASSWORDS_DO_NOT_MATCH: 'PASSWORDS_DO_NOT_MATCH',
    INVALID_DATE_FORMAT: 'INVALID_DATE_FORMAT',
    DATE_OUT_OF_RANGE: 'DATE_OUT_OF_RANGE',
    VALUE_TOO_LOW: 'VALUE_TOO_LOW',
    VALUE_TOO_HIGH: 'VALUE_TOO_HIGH',
    EXCEEDS_MAX_CHARACTERS: 'EXCEEDS_MAX_CHARACTERS',
    INVALID_URL: 'INVALID_URL',
    INVALID_ZIP_CODE: 'INVALID_ZIP_CODE',
    ONLY_POSITIVE_NUMBERS: 'ONLY_POSITIVE_NUMBERS',
    INVALID_CREDIT_CARD: 'INVALID_CREDIT_CARD',
    INVALID_FILE_TYPE: 'INVALID_FILE_TYPE',
    FILE_TOO_LARGE: 'FILE_TOO_LARGE',
    // Success messages
    SUCCESS: 'SUCCESS',
    SAVED_SUCCESSFULLY: 'SAVED_SUCCESSFULLY',
    UPDATED_SUCCESSFULLY: 'UPDATED_SUCCESSFULLY',
    DELETED_SUCCESSFULLY: 'DELETED_SUCCESSFULLY',
    SUBMITTED_SUCCESSFULLY: 'SUBMITTED_SUCCESSFULLY',
    EMAIL_SENT: 'EMAIL_SENT',
    PASSWORD_CHANGED: 'PASSWORD_CHANGED',
    LOGGED_IN: 'LOGGED_IN',
    LOGGED_OUT: 'LOGGED_OUT',
    UPLOAD_SUCCESSFUL: 'UPLOAD_SUCCESSFUL',
    PAYMENT_SUCCESSFUL: 'PAYMENT_SUCCESSFUL',
    DATA_FETCHED: 'DATA_FETCHED',
    DATA_LOADED: 'DATA_LOADED',
    ACTION_COMPLETED: 'ACTION_COMPLETED',
    // Error messages
    WENT_WRONG: 'WENT_WRONG',
    NOT_FOUND: 'NOT_FOUND',
    UNAUTHORIZED: 'UNAUTHORIZED',
    FORBIDDEN: 'FORBIDDEN',
    SERVER_ERROR: 'SERVER_ERROR',
    CONNECTION_ERROR: 'CONNECTION_ERROR',
    TIMEOUT_ERROR: 'TIMEOUT_ERROR',
    VALIDATION_FAILED: 'VALIDATION_FAILED',
    DUPLICATE_ENTRY: 'DUPLICATE_ENTRY',
    SESSION_EXPIRED: 'SESSION_EXPIRED',
    INVALID_SESSION: 'INVALID_SESSION',
    RATE_LIMIT_EXCEEDED: 'RATE_LIMIT_EXCEEDED',
    RESOURCE_LOCKED: 'RESOURCE_LOCKED',
    DATA_CORRUPTED: 'DATA_CORRUPTED',
    SERVICE_UNAVAILABLE: 'SERVICE_UNAVAILABLE',
    PAYMENT_FAILED: 'PAYMENT_FAILED',
    OPERATION_FAILED: 'OPERATION_FAILED',
    ACCESS_DENIED: 'ACCESS_DENIED',
    INVALID_CREDENTIALS: 'INVALID_CREDENTIALS',
    INVALID_TOKEN: 'INVALID_TOKEN',
    USER_NOT_FOUND: 'USER_NOT_FOUND',
    PASSWORD_RESET_FAILED: 'PASSWORD_RESET_FAILED',
    // Informational Messages
    NO_DATA_FOUND: 'NO_DATA_FOUND',
    NO_RECORD_FOUND: 'NO_RECORD_FOUND',
    NO_RECORDS_FOUND: 'NO_RECORDS_FOUND',
    NO_RECORDS_MATCHED: 'NO_RECORDS_MATCHED',
    NO_RECORDS_MATCHED_FILTER: 'NO_RECORDS_MATCHED_FILTER',
    LOADING: 'LOADING',
    FETCHING_DATA: 'FETCHING_DATA',
    PROCESSING: 'PROCESSING',
    PLEASE_WAIT: 'PLEASE_WAIT',
    NO_RESULTS_FOUND: 'NO_RESULTS_FOUND',
    NO_DATA_AVAILABLE: 'NO_DATA_AVAILABLE',
    SEARCHING: 'SEARCHING',
    REDIRECTING: 'REDIRECTING',
    CONNECTING: 'CONNECTING',
    LOGGING_OUT: 'LOGGING_OUT',
    LOGGING_IN: 'LOGGING_IN',
    PREPARING_DOWNLOAD: 'PREPARING_DOWNLOAD',
    CHECKING_UPDATES: 'CHECKING_UPDATES',
    // Confirmation Messages
    CONFIRM_DELETE: 'CONFIRM_DELETE',
    CONFIRM_SAVE: 'CONFIRM_SAVE',
    CONFIRM_SUBMIT: 'CONFIRM_SUBMIT',
    CONFIRM_LOGOUT: 'CONFIRM_LOGOUT',
    CONFIRM_ACTION: 'CONFIRM_ACTION',
    CONFIRM_CLOSE: 'CONFIRM_CLOSE',
    CONFIRM_CANCEL: 'CONFIRM_CANCEL',
    CONFIRM_RESTART: 'CONFIRM_RESTART',
    // Warning Messages
    UNSAVED_CHANGES: 'UNSAVED_CHANGES',
    LOW_BATTERY: 'LOW_BATTERY',
    HIGH_USAGE: 'HIGH_USAGE',
    INCOMPLETE_FORM: 'INCOMPLETE_FORM',
    LIMIT_REACHED: 'LIMIT_REACHED',
    OUTDATED_VERSION: 'OUTDATED_VERSION',
    // General Messages
    WELCOME: 'WELCOME',
    GOODBYE: 'GOODBYE',
    HELLO: 'HELLO',
    THANK_YOU: 'THANK_YOU',
    TRY_AGAIN: 'TRY_AGAIN',
    UNDER_MAINTENANCE: 'UNDER_MAINTENANCE',
    FEATURE_COMING_SOON: 'FEATURE_COMING_SOON',
    CONTACT_SUPPORT: 'CONTACT_SUPPORT',
    UPDATING: 'UPDATING',
    INSTALLING: 'INSTALLING',
    RESTART_REQUIRED: 'RESTART_REQUIRED',
    RESTARTING: 'RESTARTING',
    LOADING_DATA: 'LOADING_DATA',
    SAVING: 'SAVING'
};
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/http.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __awaiter = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Http = exports.HttpMethods = exports.BaseHeaders = exports.HttpHeaders = exports.RespType = void 0;
const util_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/util.js [app-client] (ecmascript)");
const const_keys_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-keys.js [app-client] (ecmascript)");
var RespType;
(function(RespType) {
    RespType["JSON"] = "json";
    RespType["TEXT"] = "text";
    RespType["BLOB"] = "blob";
    RespType["FORM_DATA"] = "formData";
    RespType["ARRAY_BUFFER"] = "arrayBuffer";
})(RespType || (exports.RespType = RespType = {}));
exports.HttpHeaders = {
    'Content-Type': 'application/json',
    authorization: null,
    'request-id': null
};
exports.BaseHeaders = {
    authorization: null,
    'request-id': null
};
exports.HttpMethods = {
    GET: "GET",
    POST: "POST",
    PUT: "PUT",
    DELETE: "DELETE"
};
class Http {
    static RespData(response_1) {
        return __awaiter(this, arguments, void 0, function*(response, type = RespType.JSON) {
            if (!response.ok) {
                const data = yield response.text();
                if (data && data.startsWith('{') || data.startsWith('[')) {
                    throw JSON.parse(data);
                } else {
                    throw data;
                }
            }
            switch(type){
                case RespType.JSON:
                    return yield response === null || response === void 0 ? void 0 : response.json();
                case RespType.TEXT:
                    return yield response === null || response === void 0 ? void 0 : response.text();
                case RespType.BLOB:
                    return yield response === null || response === void 0 ? void 0 : response.blob();
                case RespType.FORM_DATA:
                    return yield response === null || response === void 0 ? void 0 : response.formData();
                case RespType.ARRAY_BUFFER:
                    return yield response === null || response === void 0 ? void 0 : response.arrayBuffer();
                case RespType.BLOB:
                    return yield response === null || response === void 0 ? void 0 : response.blob();
                default:
                    return null;
            }
        });
    }
    static Get(url_1, params_1, headers_1) {
        return __awaiter(this, arguments, void 0, function*(url, params, headers, type = RespType.JSON) {
            url = url.startsWith('http') ? url : Http.API_BASE_URL + url;
            const fullUrl = params ? `${url}?${new URLSearchParams(params).toString()}` : url;
            headers = headers || exports.HttpHeaders;
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: headers
                };
                const response = yield fetch(fullUrl, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: fullUrl,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static Post(url_1, data_1, headers_1) {
        return __awaiter(this, arguments, void 0, function*(url, data, headers, type = RespType.JSON) {
            url = url.startsWith('http') ? url : Http.API_BASE_URL + url;
            headers = headers || exports.HttpHeaders;
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: headers
                };
                const response = yield fetch(url, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: url,
                    requestId: headers['request-id'],
                    body: data,
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static Put(url_1, data_1, headers_1) {
        return __awaiter(this, arguments, void 0, function*(url, data, headers, type = RespType.JSON) {
            url = url.startsWith('http') ? url : Http.API_BASE_URL + url;
            headers = headers || exports.HttpHeaders;
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: 'PUT',
                    body: JSON.stringify(data),
                    headers: headers
                };
                const response = yield fetch(url, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: url,
                    requestId: headers['request-id'],
                    body: data,
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static Delete(url_1, params_1, headers_1) {
        return __awaiter(this, arguments, void 0, function*(url, params, headers, type = RespType.JSON) {
            url = url.startsWith('http') ? url : Http.API_BASE_URL + url;
            const fullUrl = params ? `${url}?${new URLSearchParams(params).toString()}` : url;
            headers = headers || exports.HttpHeaders;
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: 'DELETE',
                    headers: headers
                };
                const response = yield fetch(fullUrl, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: fullUrl,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static Token(sessionInfo_1, appKey_1, apiKey_1) {
        return __awaiter(this, arguments, void 0, function*(sessionInfo, appKey, apiKey, type = RespType.TEXT) {
            const url = `${Http.API_BASE_URL}${Http.TOKEN_URL}`;
            const params = {
                key: appKey,
                payload: JSON.stringify(sessionInfo)
            };
            const fullUrl = `${url}?${new URLSearchParams(params).toString()}`;
            const headers = Object.assign(Object.assign({}, Headers), {
                'X-API-KEY': apiKey || ''
            });
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: 'GET',
                    headers: headers
                };
                const response = yield fetch(fullUrl, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: fullUrl,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static FormUpload(url_1, file_1) {
        return __awaiter(this, arguments, void 0, function*(url, file, isHeadersAddMultiForm = false, data = {}, headers = exports.BaseHeaders, method = 'PUT', type = RespType.JSON) {
            url = url.startsWith('http') ? url : Http.API_BASE_URL + url;
            const formData = new FormData();
            formData.append('file', file);
            for(const key in data){
                if (data[key] !== undefined && data[key] !== null) {
                    formData.append(key, data[key]);
                }
            }
            if (isHeadersAddMultiForm) {
                headers = Object.assign(Object.assign({}, headers), {
                    'Content-Type': headers['Content-Type'] || 'multipart/form-data'
                });
            }
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: method,
                    body: formData,
                    headers: Object.assign({}, headers)
                };
                const response = yield fetch(url, requestOptions);
                return yield Http.RespData(response, type);
            } catch (error) {
                throw {
                    url: url,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static CloudUpload(fullUrl_1, file_1) {
        return __awaiter(this, arguments, void 0, function*(fullUrl, file, headers = null, method = 'PUT') {
            headers = headers || {
                'Content-Type': file.type
            };
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: method,
                    body: file,
                    headers: Object.assign({}, headers)
                };
                const response = yield fetch(fullUrl, requestOptions);
                return response;
            } catch (error) {
                throw {
                    url: fullUrl,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static FileDownload(fullUrl_1, params_1) {
        return __awaiter(this, arguments, void 0, function*(fullUrl, params, headers = exports.HttpHeaders, method = 'GET') {
            fullUrl = params ? `${fullUrl}?${new URLSearchParams(params).toString()}` : fullUrl;
            headers = headers || exports.HttpHeaders;
            headers['request-id'] = headers['request-id'] || (0, util_1.AppUUID4)();
            try {
                const requestOptions = {
                    method: method,
                    headers: headers
                };
                const response = yield fetch(fullUrl, requestOptions);
                const blob = yield response.blob();
                return blob;
            } catch (error) {
                throw {
                    url: fullUrl,
                    requestId: headers['request-id'],
                    error: Http.ErrorWrapper(error)
                };
            }
        });
    }
    static ErrorWrapper(errorData) {
        return Object.assign(Object.assign({}, errorData), {
            message: errorData.internal_message || errorData.message || const_keys_1.ConstKeys.INVALID_DATA,
            main_message: errorData.message || const_keys_1.ConstKeys.INVALID_DATA
        });
    }
}
exports.Http = Http;
Http.API_BASE_URL = "";
Http.TOKEN_URL = `/apisix/plugin/jwt/sign`;
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-type.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-messages.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ConstMessages = void 0;
exports.ConstMessages = {
    // Validation messages
    REQUIRED: 'this filed is required',
    MIN_LENGTH_REQUIRED: 'Minimum length required',
    MAX_LENGTH_EXCEED: 'Maximum length exceeded',
    INVALID_DATA: 'Invalid data',
    FIELD_MUST_BE_NUMERIC: 'This field must be numeric',
    FIELD_MUST_BE_ALPHABETIC: 'This field must contain only letters',
    FIELD_MUST_BE_ALPHANUMERIC: 'This field must contain only letters and numbers',
    INVALID_EMAIL: 'Invalid email format',
    INVALID_PHONE: 'Invalid phone number',
    PASSWORD_TOO_WEAK: 'Password is too weak',
    PASSWORDS_DO_NOT_MATCH: 'Passwords do not match',
    INVALID_DATE_FORMAT: 'Invalid date format',
    DATE_OUT_OF_RANGE: 'Date is out of acceptable range',
    VALUE_TOO_LOW: 'Value is too low',
    VALUE_TOO_HIGH: 'Value is too high',
    EXCEEDS_MAX_CHARACTERS: 'Exceeds maximum character limit',
    INVALID_URL: 'Invalid URL format',
    INVALID_ZIP_CODE: 'Invalid zip/postal code',
    ONLY_POSITIVE_NUMBERS: 'Only positive numbers are allowed',
    INVALID_CREDIT_CARD: 'Invalid credit card number',
    INVALID_FILE_TYPE: 'Unsupported file type',
    FILE_TOO_LARGE: 'File size exceeds the maximum limit',
    // Success messages
    SUCCESS: 'Operation completed successfully',
    SAVED_SUCCESSFULLY: 'Data saved successfully',
    UPDATED_SUCCESSFULLY: 'Data updated successfully',
    DELETED_SUCCESSFULLY: 'Data deleted successfully',
    SUBMITTED_SUCCESSFULLY: 'Form submitted successfully',
    EMAIL_SENT: 'Email sent successfully',
    PASSWORD_CHANGED: 'Password changed successfully',
    LOGGED_IN: 'Logged in successfully',
    LOGGED_OUT: 'Logged out successfully',
    UPLOAD_SUCCESSFUL: 'File uploaded successfully',
    PAYMENT_SUCCESSFUL: 'Payment processed successfully',
    DATA_FETCHED: 'Data fetched successfully',
    DATA_LOADED: 'Data loaded successfully',
    ACTION_COMPLETED: 'Action completed successfully',
    // Error messages
    WENT_WRONG: 'Something went wrong, please try again',
    NOT_FOUND: 'Requested resource not found',
    UNAUTHORIZED: 'You are not authorized to perform this action',
    FORBIDDEN: 'Access to this resource is forbidden',
    SERVER_ERROR: 'Internal server error, please contact support',
    CONNECTION_ERROR: 'Unable to connect, please check your internet connection',
    TIMEOUT_ERROR: 'The request timed out, please try again later',
    VALIDATION_FAILED: 'Validation failed, please check the input',
    DUPLICATE_ENTRY: 'Duplicate entry, please provide unique data',
    SESSION_EXPIRED: 'Your session has expired, please log in again',
    INVALID_SESSION: 'Invalid session, please authenticate',
    RATE_LIMIT_EXCEEDED: 'Too many requests, please try again later',
    RESOURCE_LOCKED: 'This resource is currently locked',
    DATA_CORRUPTED: 'Data is corrupted',
    SERVICE_UNAVAILABLE: 'Service is currently unavailable',
    PAYMENT_FAILED: 'Payment failed, please check your details',
    OPERATION_FAILED: 'Operation failed, please try again',
    ACCESS_DENIED: 'Access denied',
    INVALID_CREDENTIALS: 'Invalid credentials, please try again',
    INVALID_TOKEN: 'Invalid token, please try again',
    USER_NOT_FOUND: 'User not found, please try again',
    PASSWORD_RESET_FAILED: 'Password reset failed, please try again',
    // Informational Messages
    NO_DATA_FOUND: 'No data found',
    NO_RECORD_FOUND: 'No record found',
    NO_RECORDS_FOUND: 'No records found',
    NO_RECORDS_MATCHED: 'No records matched your search criteria',
    NO_RECORDS_MATCHED_FILTER: 'No records matched your filter criteria',
    LOADING: 'Loading, please wait...',
    FETCHING_DATA: 'Fetching data, please wait...',
    PROCESSING: 'Processing your request...',
    PLEASE_WAIT: 'Please wait...',
    NO_RESULTS_FOUND: 'No results found',
    NO_DATA_AVAILABLE: 'No data available',
    SEARCHING: 'Searching...',
    REDIRECTING: 'Redirecting, please wait...',
    CONNECTING: 'Connecting, please wait...',
    LOGGING_OUT: 'Logging out, please wait...',
    LOGGING_IN: 'Logging in, please wait...',
    PREPARING_DOWNLOAD: 'Preparing your download...',
    CHECKING_UPDATES: 'Checking for updates...',
    // Confirmation Messages
    CONFIRM_DELETE: 'Are you sure you want to delete this?',
    CONFIRM_SAVE: 'Do you want to save changes?',
    CONFIRM_SUBMIT: 'Do you want to submit this form?',
    CONFIRM_LOGOUT: 'Are you sure you want to log out?',
    CONFIRM_ACTION: 'Are you sure you want to proceed?',
    CONFIRM_CLOSE: 'Are you sure you want to close this window?',
    CONFIRM_CANCEL: 'Do you want to cancel this action?',
    CONFIRM_RESTART: 'Do you want to restart the process?',
    // Warning Messages
    UNSAVED_CHANGES: 'You have unsaved changes. Do you want to discard them?',
    LOW_BATTERY: 'Battery level is low, please connect your charger',
    HIGH_USAGE: 'High system usage detected',
    INCOMPLETE_FORM: 'The form is incomplete',
    LIMIT_REACHED: 'You have reached the maximum limit',
    OUTDATED_VERSION: 'You are using an outdated version of the application',
    // General Messages
    WELCOME: 'Welcome to the application',
    GOODBYE: 'Goodbye, have a great day!',
    HELLO: 'Hello, how can we help you today?',
    THANK_YOU: 'Thank you for using our service',
    TRY_AGAIN: 'Please try again',
    UNDER_MAINTENANCE: 'The system is under maintenance, please check back later',
    FEATURE_COMING_SOON: 'This feature is coming soon',
    CONTACT_SUPPORT: 'If the issue persists, please contact support',
    UPDATING: 'Updating, please wait...',
    INSTALLING: 'Installing, please wait...',
    RESTART_REQUIRED: 'A restart is required to apply changes',
    RESTARTING: 'Restarting, please wait...',
    LOADING_DATA: 'Loading data, please wait...',
    SAVING: 'Saving, please wait...'
};
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/case-mapper.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.toCamelCase = toCamelCase;
exports.toSnakeCase = toSnakeCase;
exports.toPascalCase = toPascalCase;
exports.toUpperCase = toUpperCase;
exports.toLowerCase = toLowerCase;
exports.toViewMapper = toViewMapper;
exports.toEntityMapper = toEntityMapper;
exports.toSchemaMapper = toSchemaMapper;
const const_value_1 = __turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-value.js [app-client] (ecmascript)");
function toCamelCase(str) {
    return str.replace(/[_\s-]+(.)?/g, (_, chr)=>chr ? chr.toUpperCase() : '').replace(/^[A-Z]/, (chr)=>chr.toLowerCase());
}
function toSnakeCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2') // camelCase → camel_Case
    .replace(/[\s-]+/g, '_') // space/dash → underscore
    .replace(/__+/g, '_') // collapse multiple underscores
    .toLowerCase();
}
function toPascalCase(str) {
    return str.replace(/[_\s-]+/g, ' ').replace(/\w+/g, (word)=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).replace(/\s+/g, '');
}
function toUpperCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2') // camelCase to snake_case
    .replace(/[\s-]+/g, '_') // spaces/hyphens to underscores
    .replace(/([A-Z]+)/g, '_$1') // handle acronyms (optional)
    .replace(/^_+|_+$/g, '') // trim leading/trailing _
    .toUpperCase();
}
function toLowerCase(str) {
    return str.replace(/([a-z0-9])([A-Z])/g, '$1_$2').replace(/[\s-]+/g, '_').replace(/([A-Z]+)/g, '_$1').replace(/^_+|_+$/g, '').toLowerCase();
}
function isPlainObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]';
}
const LANGUAGE_CODE_SET = new Set(const_value_1.AllLanguageCodes);
function isLanguageMap(value) {
    if (!isPlainObject(value)) return false;
    const keys = Object.keys(value);
    if (keys.length === 0) return false;
    return keys.every((k)=>LANGUAGE_CODE_SET.has(k));
}
function toViewMapper(obj) {
    if (Array.isArray(obj)) {
        return obj.map(toViewMapper);
    }
    if (isLanguageMap(obj)) {
        return obj;
    }
    if (isPlainObject(obj)) {
        return Object.fromEntries(Object.entries(obj).map(([key, value])=>[
                toCamelCase(key === '_id' ? 'id' : key),
                toViewMapper(value)
            ]));
    }
    return obj; // Date, Buffer, Map, etc. returned as-is
}
function toEntityMapper(obj) {
    if (Array.isArray(obj)) {
        return obj.map((v)=>toEntityMapper(v));
    }
    if (isLanguageMap(obj)) {
        return obj; // preserve language codes exactly
    }
    if (isPlainObject(obj)) {
        return Object.fromEntries(Object.entries(obj).map(([key, value])=>{
            const mappedKey = toSnakeCase(key);
            return [
                mappedKey,
                toEntityMapper(value)
            ];
        }));
    }
    return obj; // primitives, Date, Buffer, etc.
}
function toSchemaMapper(obj) {
    if (Array.isArray(obj)) {
        return obj.map(toEntityMapper);
    }
    if (isLanguageMap(obj)) {
        return obj; // do not transform language code keys
    }
    if (isPlainObject(obj)) {
        return Object.fromEntries(Object.entries(obj).map(([key, value])=>[
                toSnakeCase(key === 'id' ? '_id' : key),
                toEntityMapper(value)
            ]));
    }
    return obj; // Date, Buffer, Map, etc. returned as-is
}
}),
"[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/index.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __createBinding = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__createBinding || (Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});
var __exportStar = /*TURBOPACK member replacement*/ __turbopack_context__.e && /*TURBOPACK member replacement*/ __turbopack_context__.e.__exportStar || function(m, exports1) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports1, p)) __createBinding(exports1, m, p);
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/util.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/jwt-util.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/http.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/reg-exr.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-value.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-type.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-keys.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/const-messages.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/countries.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/languages.js [app-client] (ecmascript)"), exports);
__exportStar(__turbopack_context__.r("[project]/Documents/react-project/timesheet/node_modules/dff-util/dist/main/case-mapper.js [app-client] (ecmascript)"), exports);
}),
]);

//# sourceMappingURL=bbb33_6a45a181._.js.map