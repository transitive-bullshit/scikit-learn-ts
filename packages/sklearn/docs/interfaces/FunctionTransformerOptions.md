[sklearn](../readme.md) / [Exports](../modules.md) / FunctionTransformerOptions

# Interface: FunctionTransformerOptions

## Table of contents

### Properties

- [accept\_sparse](FunctionTransformerOptions.md#accept_sparse)
- [check\_inverse](FunctionTransformerOptions.md#check_inverse)
- [feature\_names\_out](FunctionTransformerOptions.md#feature_names_out)
- [func](FunctionTransformerOptions.md#func)
- [inv\_kw\_args](FunctionTransformerOptions.md#inv_kw_args)
- [inverse\_func](FunctionTransformerOptions.md#inverse_func)
- [kw\_args](FunctionTransformerOptions.md#kw_args)
- [validate](FunctionTransformerOptions.md#validate)

## Properties

### accept\_sparse

• `Optional` **accept\_sparse**: `boolean`

Indicate that func accepts a sparse matrix as input. If validate is `false`, this has no effect. Otherwise, if accept\_sparse is false, sparse matrix inputs will cause an exception to be raised.

**`Default Value`**

`false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L399)

___

### check\_inverse

• `Optional` **check\_inverse**: `boolean`

Whether to check that or `func` followed by `inverse\_func` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.

**`Default Value`**

`true`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L406)

___

### feature\_names\_out

• `Optional` **feature\_names\_out**: ``"one-to-one"``

Determines the list of feature names that will be returned by the `get\_feature\_names\_out` method. If it is ‘one-to-one’, then the output feature names will be equal to the input feature names. If it is a callable, then it must take two positional arguments: this `FunctionTransformer` (`self`) and an array-like of input feature names (`input\_features`). It must return an array-like of output feature names. The `get\_feature\_names\_out` method is only defined if `feature\_names\_out` is not `undefined`.

See `get\_feature\_names\_out` for more details.

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L413)

___

### func

• `Optional` **func**: `any`

The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is `undefined`, then func will be the identity function.

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L380)

___

### inv\_kw\_args

• `Optional` **inv\_kw\_args**: `any`

Dictionary of additional keyword arguments to pass to inverse\_func.

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L423)

___

### inverse\_func

• `Optional` **inverse\_func**: `any`

The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse\_func is `undefined`, then inverse\_func will be the identity function.

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L385)

___

### kw\_args

• `Optional` **kw\_args**: `any`

Dictionary of additional keyword arguments to pass to func.

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L418)

___

### validate

• `Optional` **validate**: `boolean`

Indicate that the input X array should be checked before calling `func`. The possibilities are:

**`Default Value`**

`false`

#### Defined in

[generated/preprocessing/FunctionTransformer.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L392)
