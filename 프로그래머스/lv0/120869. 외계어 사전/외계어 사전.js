function solution(spell, dic) {
    for (let i = 0; i < dic.length; i++) {
        if (spell.length > dic[i].length) continue;
        spell.forEach(v => {
            if (dic[i].includes(v)) dic[i] = dic[i].replace(v, "");
        });
    }

    return dic.includes("") ? 1 : 2;
}