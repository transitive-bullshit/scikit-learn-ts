[sklearn](../readme.md) / [Exports](../modules.md) / DecisionTreeClassifierFitOptions

# Interface: DecisionTreeClassifierFitOptions

## Table of contents

### Properties

- [X](DecisionTreeClassifierFitOptions.md#x)
- [check\_input](DecisionTreeClassifierFitOptions.md#check_input)
- [sample\_weight](DecisionTreeClassifierFitOptions.md#sample_weight)
- [y](DecisionTreeClassifierFitOptions.md#y)

## Properties

### X

• `Optional` **X**: [`ArrayLike`](../modules.md#arraylike)

The training input samples. Internally, it will be converted to `dtype=np.float32` and if a sparse matrix is provided to a sparse `csc\_matrix`.

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:800](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L800)

___

### check\_input

• `Optional` **check\_input**: `boolean`

Allow to bypass several input checking. Don’t use this parameter unless you know what you’re doing.

**`Default Value`**

`true`

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:817](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L817)

___

### sample\_weight

• `Optional` **sample\_weight**: [`ArrayLike`](../modules.md#arraylike)

Sample weights. If `undefined`, then samples are equally weighted. Splits that would create child nodes with net zero or negative weight are ignored while searching for a split in each node. Splits are also ignored if they would result in any single class carrying a negative weight in either child node.

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:810](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L810)

___

### y

• `Optional` **y**: [`ArrayLike`](../modules.md#arraylike)

The target values (class labels) as integers or strings.

#### Defined in

[generated/tree/DecisionTreeClassifier.ts:805](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/tree/DecisionTreeClassifier.ts#L805)
