# FunctionTransformerOptions

## Properties

### accept\_sparse?

> `boolean`

Indicate that func accepts a sparse matrix as input. If validate is `false`, this has no effect. Otherwise, if accept\_sparse is false, sparse matrix inputs will cause an exception to be raised.

#### Default Value

`false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:399](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L399)

### check\_inverse?

> `boolean`

Whether to check that or `func` followed by `inverse\_func` leads to the original inputs. It can be used for a sanity check, raising a warning when the condition is not fulfilled.

#### Default Value

`true`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:406](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L406)

### feature\_names\_out?

> `"one-to-one"`

Determines the list of feature names that will be returned by the `get\_feature\_names\_out` method. If it is ‘one-to-one’, then the output feature names will be equal to the input feature names. If it is a callable, then it must take two positional arguments: this `FunctionTransformer` (`self`) and an array-like of input feature names (`input\_features`). It must return an array-like of output feature names. The `get\_feature\_names\_out` method is only defined if `feature\_names\_out` is not `undefined`.

See `get\_feature\_names\_out` for more details.

Defined in:  [generated/preprocessing/FunctionTransformer.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L413)

### func?

> `any`

The callable to use for the transformation. This will be passed the same arguments as transform, with args and kwargs forwarded. If func is `undefined`, then func will be the identity function.

Defined in:  [generated/preprocessing/FunctionTransformer.ts:380](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L380)

### inv\_kw\_args?

> `any`

Dictionary of additional keyword arguments to pass to inverse\_func.

Defined in:  [generated/preprocessing/FunctionTransformer.ts:423](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L423)

### inverse\_func?

> `any`

The callable to use for the inverse transformation. This will be passed the same arguments as inverse transform, with args and kwargs forwarded. If inverse\_func is `undefined`, then inverse\_func will be the identity function.

Defined in:  [generated/preprocessing/FunctionTransformer.ts:385](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L385)

### kw\_args?

> `any`

Dictionary of additional keyword arguments to pass to func.

Defined in:  [generated/preprocessing/FunctionTransformer.ts:418](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L418)

### validate?

> `boolean`

Indicate that the input X array should be checked before calling `func`. The possibilities are:

#### Default Value

`false`

Defined in:  [generated/preprocessing/FunctionTransformer.ts:392](https://github.com/transitive-bullshit/scikit-learn-ts/blob/92ab806/packages/sklearn/src/generated/preprocessing/FunctionTransformer.ts#L392)
