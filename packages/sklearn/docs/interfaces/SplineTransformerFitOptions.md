[sklearn](../readme.md) / [Exports](../modules.md) / SplineTransformerFitOptions

# Interface: SplineTransformerFitOptions

## Table of contents

### Properties

- [X](SplineTransformerFitOptions.md#x)
- [sample\_weight](SplineTransformerFitOptions.md#sample_weight)
- [y](SplineTransformerFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)[]

The data.

#### Defined in

[generated/preprocessing/SplineTransformer.ts:433](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L433)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Individual weights for each sample. Used to calculate quantiles if `knots="quantile"`. For `knots="uniform"`, zero weighted observations are ignored for finding the min and max of `X`.

#### Defined in

[generated/preprocessing/SplineTransformer.ts:443](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L443)

___

### y

• `Optional` **y**: `any`

Ignored.

#### Defined in

[generated/preprocessing/SplineTransformer.ts:438](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/SplineTransformer.ts#L438)
