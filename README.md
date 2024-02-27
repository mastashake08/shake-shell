# shake-shell

[![NPM](https://nodei.co/npm/shake-shell.png)](https://nodei.co/npm/shake-shell/)

[![NPM version](https://img.shields.io/npm/v/shake-shell.svg)](https://www.npmjs.com/package/shake-shell)
[![Build Status](https://travis-ci.org/mastashake08/shake-shell.svg?branch=master)](https://travis-ci.org/mastashake08/shake-shell)
[![Coverage Status](https://coveralls.io/repos/github/mastashake08/shake-shell/badge.svg?branch=master)](https://coveralls.io/github/mastashake08/shake-shell?branch=master)

npm package template.

## Installation

Clone repository with Git:

```sh
git clone https://github.com/mastashake08/shake-shell.git
cd shake-shell
```

## Usage

Rename package (use [npm-package-name-checker](https://mastashake08.org/npm-package-name-checker/) to check for name availability):

```sh
# replace $NAME with your package name
git grep -l shake-shell | xargs sed -i '' -e "s/shake-shell/$NAME/g"
```

Manually update the files:

- [ ] LICENSE
- [ ] README.md
- [ ] package.json

Reinitialize Git repository:

```sh
rm -rf .git
git init
```

Install package dependencies:

```sh
npm install
```

Make first commit:

```sh
git commit -am "feat: initial commit"
```

## Testing

Run tests:

```sh
npm test
```

Run tests in watch mode:

```sh
npm run test:watch
```

Run tests with coverage:

```sh
npm run test:coverage
```

View coverage in browser:

```sh
npm run test:coverage:report
open coverage/index.html
```

Lint files:

```sh
npm run lint
```

Fix lint errors:

```sh
npm run lint:fix
```

## Release

Only collaborators with credentials can release and publish:

```sh
npm run release
git push --follow-tags && npm publish
```

To see what files are going to be published, run the command:

```sh
npm pack --dry-run
# tar tvf $(npm pack)
```

## Support

- [Patreon](https://b.remarkabl.org/patreon)
- [Ko-fi](https://b.remarkabl.org/ko-fi)
- [Liberapay](https://b.remarkabl.org/liberapay)
- [Teepsring](https://b.remarkabl.org/teespring)

## License

[MIT](https://github.com/mastashake08/shake-shell/blob/master/LICENSE)
