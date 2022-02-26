const saveThePrisoner = (n, m, s) => {

    return ((((s - 1) + (m - 1)) % n) + 1);
}

console.log(saveThePrisoner(559033664, 822024089, 131746755));