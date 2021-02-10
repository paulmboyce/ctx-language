Notes on HUSKY Version 5:
=========================

Hooks are setup differently:



SEE: https://github.com/typicode/husky/issues/862
SEE: https://typicode.github.io/husky/#/


Hi guys,

Husky Version 5 breaks the pre-commit-message hook for Commitizen.

I think this is a common problem for Husky V5 migration.

(If like me you are used to simply adding husky and commitizen to a project without knowing of the changes in new Husky 5, then this may save you time.)

SOLUTION (1) - Husky v4:
STEP 1: Roll back to Husky 4.3.8

SOLUTION (2) - Husky v5:
STEP 1: Replace the following hook in package.json:

( This is the Husky Version 4 hook specified by commitizen, see: https://github.com/commitizen/cz-cli )

"husky": {
		"hooks": {
			"prepare-commit-msg": "exec < /dev/tty && git cz --hook || true"
		}
	},
STEP 2: With a external hook by executing the following (which create a Husky V5 hook in a separate file):

npx husky add .husky/prepare-commit-msg "exec < /dev/tty && git cz --hook || true"
You hook will not be located here:

.husky/prepare-commit-msg


ALSO: add this to "scripts": 
  "postinstall": "husky install" 
This will automatically reload the hooks on a fresh install.

lastly, rememebr to commit your hook files to git (like  .husky/prepare-commit-msg)

