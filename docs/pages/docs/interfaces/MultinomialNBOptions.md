# MultinomialNBOptions

## Properties

### alpha?

> `number` \| [`ArrayLike`](../types/ArrayLike.md)

Additive (Laplace/Lidstone) smoothing parameter (set alpha=0 and force\_alpha=`true`, for no smoothing).

#### Default Value

`1`

Defined in:  [generated/naive\_bayes/MultinomialNB.ts:518](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L518)

### class\_prior?

> [`ArrayLike`](../types/ArrayLike.md)

Prior probabilities of the classes. If specified, the priors are not adjusted according to the data.

Defined in:  [generated/naive\_bayes/MultinomialNB.ts:537](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L537)

### fit\_prior?

> `boolean`

Whether to learn class prior probabilities or not. If false, a uniform prior will be used.

#### Default Value

`true`

Defined in:  [generated/naive\_bayes/MultinomialNB.ts:532](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L532)

### force\_alpha?

> `boolean`

If `false` and alpha is less than 1e-10, it will set alpha to 1e-10. If `true`, alpha will remain unchanged. This may cause numerical errors if alpha is too close to 0.

#### Default Value

`false`

Defined in:  [generated/naive\_bayes/MultinomialNB.ts:525](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/naive_bayes/MultinomialNB.ts#L525)
