[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeClassifierPredictOptions

# Interface: ExtraTreeClassifierPredictOptions

## Table of contents

### Properties

- [X](ExtraTreeClassifierPredictOptions.md#x)
- [check\_input](ExtraTreeClassifierPredictOptions.md#check_input)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csr\_matrix`.

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:824](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L824)

___

### check\_input

• `Optional` **check\_input**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**`Default Value`**

`true`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:831](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L831)
