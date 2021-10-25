const XO = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
export const btoa = (a) => {
    var c, d, e, f, g, h, i, j, o, b = XO + '=', k = 0, l = 0, m = '', n = [];
    if (!a)
        return a;
    do
        (c = a.charCodeAt(k++)),
            (d = a.charCodeAt(k++)),
            (e = a.charCodeAt(k++)),
            (j = (c << 16) | (d << 8) | e),
            (f = 63 & (j >> 18)),
            (g = 63 & (j >> 12)),
            (h = 63 & (j >> 6)),
            (i = 63 & j),
            (n[l++] = b.charAt(f) + b.charAt(g) + b.charAt(h) + b.charAt(i));
    while (k < a.length);
    return (m = n.join('')), (o = a.length % 3), (o ? m.slice(0, o - 3) : m) + '==='.slice(o || 3);
};
export const atob = (a) => {
    var b, c, d, e = {}, f = 0, g = 0, h = '', i = String.fromCharCode, j = a.length;
    for (b = 0; 64 > b; b++)
        e[XO.charAt(b)] = b;
    for (c = 0; j > c; c++)
        for (b = e[a.charAt(c)], f = (f << 6) + b, g += 6; g >= 8;)
            ((d = 255 & (f >>> (g -= 8))) || j - 2 > c) && (h += i(d));
    return h;
};
