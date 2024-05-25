/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    const mapS = {};
    const mapT = {};

    for (let i = 0; i < s.length; i++) {
        const charS = s[i];
        const charT = t[i];

        if (mapS[charS] === undefined && mapT[charT] === undefined) {
            mapS[charS] = charT;
            mapT[charT] = charS;
        } else {
            if (mapS[charS] !== charT || mapT[charT] !== charS) {
                return false;
            }
        }
    }

    return true;
};