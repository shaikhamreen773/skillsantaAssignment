﻿function strip_tags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/<[^>]*>/g, '');
}

console.log(strip_tags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));
//document.write(strip_tags('<p><strong><em>SkillSanta Assignments</em></strong></p>'));