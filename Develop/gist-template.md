# Regex-Tutorial  :sunglasses:

In this tutorial, we will be going through the basic components of regex, and we will be breaking down our example and how it works.

## Summary 📃

Regular expressions, often abbreviated as regex, are powerful tools used to identify and extract patterns of text within text data. They are extremely useful for locating various elements such as phone numbers, emails, usernames, and, in our case, URLs within extensive documents.

## Table of Contents 🔍

- [Anchors](#anchors)
- [Quantifiers](#quantifiers)
- [OR Operator](#or-operator)
- [Character Classes](#character-classes)
- [Flags](#flags)
- [Grouping and Capturing](#grouping-and-capturing)
- [Bracket Expressions](#bracket-expressions)
- [Greedy and Lazy Match](#greedy-and-lazy-match)
- [Boundaries](#boundaries)
- [Back-references](#back-references)
- [Look-ahead and Look-behind](#look-ahead-and-look-behind)
- [Breakdown of our regex](#breakdown-of-our-regex)
- [Author](#author)

## 🔧 Regex Components 🔧

### Anchors ⚓

Anchors in regex are symbols used to specify the position of a match within a string. Common anchors include `^` for the start of a string and `$` for the end of a string. It is also vital to remember that anchors are case sensitive.

### Quantifiers ♾️

Quantifiers dictate the number of times a particular character or a group of characters can appear in the string matched by your regex pattern. Examples include `*` for zero or more, `+` for one or more, `?` for zero or one, and `{}` to specify a specific range.


### OR Operator 😕

The OR operator in regex, represented by `|` , enables the validation of a string or number against multiple options. For example, red | blue would match either 'red' or 'blue'.

### Character Classes 🏫

In regex, a character class defines a character group where any single character from the defined set can match. For instance:
`.` matches any character except the newline `\n`.
`\d` matches any digit equivalent to `[0-9]`.
`\w` matches any alphanumeric character including underscore `_` equivalent to ` [A-Za-z0-9_]`.
`\s` matches a whitespace character including tabs and line breaks.
important: Capitalizing these classes (\D, \W, \S) negates their matches, providing a way to exclude specific character types.

### Flags 🎌

Flags in regex are used to change how the pattern matching is performed. Common flags include `g` for global match, `i` for case-insensitive match, `m` for multiline match, etc.

### 🔒 Grouping and Capturing 🔒

Grouping allows you to treat multiple characters as a single unit. Capturing groups remember the matched text and can be referenced later.

### Bracket Expressions 📝

Bracket expressions or character sets allow specifying a list of characters to match. For example, `[aeiou]` matches any vowel.

### Greedy and Lazy Match 😴

Regex quantifiers are by default greedy, meaning they match as much text as possible. Adding `?` after a quantifier makes it lazy, matching as little text as possible.

### Boundaries 🏁 

In regex boundaries `\b` can be used like anchors. For example `\b dog \b` would return dog in the cases like ' I walked the dog ', but it wouldn't return 'underdog. Same goes for `\b dog ` as this would return 'dogfight' , but not 'underdog', to return 'underdog' we would need to do `dog \b`.

### Back-references ➿

Back-references in regex patterns refer to previously captured groups within the pattern. They allow you to reuse and match the same text that was captured earlier in the pattern. These references are indicated by  `\1` , `\2` , and so on, corresponding to the capturing groups in the regex.

### Look-ahead and Look-behind 🔬

Look-ahead and look-behind assertions in regex patterns check if a certain pattern is either present or not present ahead of or behind the current matching position, without including that pattern in the actual match.

## Breakdown of our regex 🔨

Our regex: `/\b(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?\b/g`

`/\b` : The regex pattern starts with \b, which signifies a word boundary, ensuring that the match occurs at the start or end of a word.

`(https?:\/\/)?`: This part of the regex captures the protocol part of the URL.

`(https?:\/\/)? `:indicates that the protocol 'http://' or 'https://' may appear zero or one time.
The s? makes the 's' in 'https' optional.
`([\da-z\.-]+)`: This snippet is meant to catch the name of the domain.

`[\da-z\.-]+`: This matches any combination of characters that are either digits `\d`, lowercase letters `a-z`, dots `.`, or hyphens `-`. The `+` quantifier means that one or more of these characters can appear.

`\.([a-z\.]{2,6})`: This captures the top-level domain of the URL. 
\. matches a literal dot.
([a-z\.]{2,6}) matches the Top Level Domain (TLD), allowing 2 to 6 lowercase letters or dots. This may represent domain extensions like .com, .org, etc.

`([\/\w \.-]*)*`: This captures the path or additional segments in the URL. This also matches zero or more occurrences of characters that include forward slashes `\/`, word characters `\w`, spaces `' '`, dots `.`, and hyphens `-`. The `*` quantifier allows the path to be optional or repeated.
`\/?`: This matches an optional trailing forward slash in the URL path.

`\b`: Similar to the beginning, `\b` signifies a word boundary, ensuring the match occurs at the end of a word.

`/g:` The `/g` flag indicates a global search, which finds all matches within the input string.

## 🏂 Author ❄️

Hello, my name is Sefufim Alvarez. I am a full-stack developer who is also pursuing a computer science degree at Western Oregon University. In my free time, I enjoy exploring the Pacific Northwest, and during winter, I love snowboarding. If you would like to learn more about me or my work, you can find me at: :point_down:

GitHub: [:cat:](https://github.com/sefu-alv) 

Email :email: : sefufim@outlook.com
