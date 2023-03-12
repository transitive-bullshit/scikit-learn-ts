[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeRegressorPredictOptions

# Interface: ExtraTreeRegressorPredictOptions

## Table of contents

### Properties

- [X](ExtraTreeRegressorPredictOptions.md#x)
- [check\_input](ExtraTreeRegressorPredictOptions.md#check_input)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:682](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L682)

___

### check\_input

• `Optional` **check\_input**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**`Default Value`**

`true`

#### Defined in

[generated/tree/ExtraTreeRegressor.ts:689](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeRegressor.ts#L689)
