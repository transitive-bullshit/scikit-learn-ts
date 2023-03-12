[sklearn](../readme.md) / [Exports](../modules.md) / StackingClassifierFitOptions

# Interface: StackingClassifierFitOptions

## Table of contents

### Properties

- [X](StackingClassifierFitOptions.md#x)
- [sample\_weight](StackingClassifierFitOptions.md#sample_weight)
- [y](StackingClassifierFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

Training vectors, where `n\_samples` is the number of samples and `n\_features` is the number of features.

#### Defined in

[generated/ensemble/StackingClassifier.ts:638](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L638)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Note that this is supported only if all underlying estimators support sample weights.

#### Defined in

[generated/ensemble/StackingClassifier.ts:648](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L648)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

Target values. Note that `y` will be internally encoded in numerically increasing order or lexicographic order. If the order matter (e.g. for ordinal regression), one should numerically encode the target `y` before calling [fit](../../glossary.html#term-fit).

#### Defined in

[generated/ensemble/StackingClassifier.ts:643](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/ensemble/StackingClassifier.ts#L643)
