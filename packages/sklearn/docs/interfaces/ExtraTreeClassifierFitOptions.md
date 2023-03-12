[sklearn](../readme.md) / [Exports](../modules.md) / ExtraTreeClassifierFitOptions

# Interface: ExtraTreeClassifierFitOptions

## Table of contents

### Properties

- [X](ExtraTreeClassifierFitOptions.md#x)
- [check\_input](ExtraTreeClassifierFitOptions.md#check_input)
- [sample\_weight](ExtraTreeClassifierFitOptions.md#sample_weight)
- [y](ExtraTreeClassifierFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:796](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L796)

___

### check\_input

• `Optional` **check\_input**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**`Default Value`**

`true`

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:813](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L813)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:806](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L806)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels) as integers or strings.

#### Defined in

[generated/tree/ExtraTreeClassifier.ts:801](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/ExtraTreeClassifier.ts#L801)
