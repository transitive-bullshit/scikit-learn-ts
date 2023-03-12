# StackingClassifierFitOptions

## Properties

### X?

> [`ArrayLike`](../types/ArrayLike.md)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

Defined in:  [generated/ensemble/StackingClassifier.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L638)

### sample\_weight?

> [`ArrayLike`](../types/ArrayLike.md)

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.

Defined in:  [generated/ensemble/StackingClassifier.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L648)

### y?

> [`ArrayLike`](../types/ArrayLike.md)

Target values. Note that `y` will be internally encoded in numerically increasing order or lexicographic order. If the order matter (e.g. for ordinal regression), one should numerically encode the target `y` before calling [fit](../../glossary.html#term-fit).

Defined in:  [generated/ensemble/StackingClassifier.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L643)
