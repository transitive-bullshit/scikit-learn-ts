# FastICAOptions

## Properties

### algorithm?

> `"parallel"` \| `"deflation"`

Specify which algorithm to use for FastICA.

#### Default Value

`'parallel'`

Defined in:  [generated/decomposition/FastICA.ts:462](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L462)

### fun?

> `"logcosh"` \| `"exp"` \| `"cube"`

The functional form of the G function used in the approximation to neg-entropy. Could be either ‘logcosh’, ‘exp’, or ‘cube’. You can also provide your own function. It should return a tuple containing the value of the function, and of its derivative, in the point. The derivative should be averaged along its last dimension. Example:

#### Default Value

`'logcosh'`

Defined in:  [generated/decomposition/FastICA.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L476)

### fun\_args?

> `any`

Arguments to send to the functional form. If empty or `undefined` and if fun=’logcosh’, fun\_args will take value {‘alpha’ : 1.0}.

Defined in:  [generated/decomposition/FastICA.ts:481](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L481)

### max\_iter?

> `number`

Maximum number of iterations during fit.

#### Default Value

`200`

Defined in:  [generated/decomposition/FastICA.ts:488](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L488)

### n\_components?

> `number`

Number of components to use. If `undefined` is passed, all are used.

Defined in:  [generated/decomposition/FastICA.ts:455](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L455)

### random\_state?

> `number`

Used to initialize `w\_init` when not specified, with a normal distribution. Pass an int, for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

Defined in:  [generated/decomposition/FastICA.ts:512](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L512)

### tol?

> `number`

A positive scalar giving the tolerance at which the un-mixing matrix is considered to have converged.

#### Default Value

`0.0001`

Defined in:  [generated/decomposition/FastICA.ts:495](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L495)

### w\_init?

> [`ArrayLike`](../types/ArrayLike.md)[]

Initial un-mixing array. If `w\_init=None`, then an array of values drawn from a normal distribution is used.

Defined in:  [generated/decomposition/FastICA.ts:500](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L500)

### whiten?

> `string` \| `boolean`

Specify the whitening strategy to use.

#### Default Value

`'warn'`

Defined in:  [generated/decomposition/FastICA.ts:469](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L469)

### whiten\_solver?

> `"svd"` \| `"eigh"`

The solver to use for whitening.

#### Default Value

`'svd'`

Defined in:  [generated/decomposition/FastICA.ts:507](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/decomposition/FastICA.ts#L507)
