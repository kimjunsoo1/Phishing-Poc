WRMCB = function(e) {
    var c = console;
    if (c && c.log && c.error) {
        c.log('Error running batched script.');
        c.error(e);
    }
}
;
try {
    /* module-key = 'com.atlassian.plugins.atlassian-plugins-webresource-rest:data-collector-async', location = 'js/dist/data-collector-async.js' */
    !function() {
        "use strict";
        const s = ()=>{
            const s = new Set;
            if (document.querySelectorAll("script[data-wrm-key]").forEach((e=>{
                e.src && s.add(new URL(e.src).origin)
            }
            )),
            0 === s.size)
                return !1;
            if (2 === s.size)
                return !0;
            return !s.has(new URL(location.href).origin)
        }
          , e = ()=>{
            if (!("__observedResources"in window) || 0 === __observedResources.length)
                return {};
            const s = {
                CacheHits: 0,
                CacheHitSize: 0,
                CacheMisses: 0,
                CacheMissedSize: 0,
                CacheHitsJs: 0,
                CacheHitSizeJs: 0,
                CacheMissesJs: 0,
                CacheMissedSizeJs: 0,
                CacheHitsCss: 0,
                CacheHitSizeCss: 0,
                CacheMissesCss: 0,
                CacheMissedSizeCss: 0
            };
            return __observedResources.forEach((([e,i,c,t])=>{
                0 === e ? (s.CacheHits += 1,
                s.CacheHitSize += i,
                "script" === t ? (s.CacheHitsJs += 1,
                s.CacheHitSizeJs += i) : (s.CacheHitsCss += 1,
                s.CacheHitSizeCss += i)) : (s.CacheMisses += 1,
                s.CacheMissedSize += i,
                "script" === t ? (s.CacheMissesJs += 1,
                s.CacheMissedSizeJs += i) : (s.CacheMissesCss += 1,
                s.CacheMissedSizeCss += i))
            }
            )),
            s
        }
        ;
        AJS && AJS.trigger && AJS.trigger("analytics", {
            name: "wrm.caching.data.collector",
            data: Object.assign({
                SSL: "https:" === new URL(location.href).protocol,
                AssetsForeignOrigin: s()
            }, e())
        })
    }();

} catch (e) {
    WRMCB(e)
}
;