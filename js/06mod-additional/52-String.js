const s = 'Ехал Грека через реку 🇷🇺';

console.log(s.length);

const log = (...a) => { console.log(...a); };

log(s.charAt(6));//р
log(s[6]);//р
log('🇷🇺');
log('🇷🇺'[0]);
log('🇷🇺'[1]);
log('🇷🇺'[2]);
log('🇷🇺'[3]);
log(s.charCodeAt(6));//1088
log('🇷🇺'.charCodeAt(0));//55356
log('🇷🇺'.charCodeAt(1));//56823
log('🇷🇺'.charCodeAt(2));//55356
log('🇷🇺'.charCodeAt(3));//56826

document.body.innerHTML = '🇷🇺'

log(s.indexOf('ре'));//6
log(s.indexOf('ре', 7));//13
log(s.indexOf('ре', 14));//17
log(s.indexOf('ре', 18));//-1
log(s.lastIndexOf('ре'));//17
log(s.lastIndexOf('ре', 16));//17

log(s.startsWith('ре'));//false
log(s.endsWith('ку 🇷🇺'));//true
log(s.includes('ре'));//true

// console.clear();
log(s.concat('ре')); //Ехал Грека через рекуре
log(s);

log(s.split(' '));
log(s.split(''));
log(s.split('ре'));

// console.clear();
log(s[6]);
log(s.slice(6));
log(s.slice(6, 10));

log(s.replace('р', 'л'));
log(s.replace(/р/gi, 'л'));
log('Ехал Грека через реку'.replaceAll('ре', 'РЕ'));

log(s.toLowerCase());
log(s.toUpperCase());

log(s.repeat(5));
log(s.trim());
log(' dfgdf  '.trimStart());
log(' dfgdf  '.trimEnd());
log(`   ${s}     `.trim());

// подстава '🇷🇺'.length
log('🇷🇺'.length);


//---------- Практика -------------
/*
Есть строки
- s0 со значением 'Ехал Грека через реку'
- s1 со значением 'ре'
- s2 со значением 'ле'
Написать функцию replace(s0, s1, s2), которая принимает эти строки и 
возвращает строку с замененными подстроками, то есть 'Ехал Глека челез леку'
*/
let s0 = 'Ехал Грека через реку';
let s1 = 'ре';
let s2 = 'ле';

function replace(s0, s1, s2) {
    return s0.replaceAll(s1, s2); // с учетом регистра
    // return s0.replace(new RegExp(s1, 'gi'), s2); // /ре/gi  - без учета регистра
    // return s0.split(s1).join(s2);
}
console.log(replace(s0, s1, s2));
