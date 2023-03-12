[sklearn](../readme.md) / [Exports](../modules.md) / ColumnTransformerOptions

# Interface: ColumnTransformerOptions

## Table of contents

### Properties

- [n\_jobs](ColumnTransformerOptions.md#n_jobs)
- [remainder](ColumnTransformerOptions.md#remainder)
- [sparse\_threshold](ColumnTransformerOptions.md#sparse_threshold)
- [transformer\_weights](ColumnTransformerOptions.md#transformer_weights)
- [transformers](ColumnTransformerOptions.md#transformers)
- [verbose](ColumnTransformerOptions.md#verbose)
- [verbose\_feature\_names\_out](ColumnTransformerOptions.md#verbose_feature_names_out)

## Properties

### n\_jobs

• `Optional` **n\_jobs**: `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

#### Defined in

[generated/compose/ColumnTransformer.ts:408](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L408)

___

### remainder

• `Optional` **remainder**: ``"drop"`` \| ``"passthrough"``

By default, only the specified columns in `transformers` are transformed and combined in the output, and the non-specified columns are dropped. (default of `'drop'`). By specifying `remainder='passthrough'`, all remaining columns that were not specified in `transformers`, but present in the data passed to `fit` will be automatically passed through. This subset of columns is concatenated with the output of the transformers. For dataframes, extra columns not seen during `fit` will be excluded from the output of `transform`. By setting `remainder` to be an estimator, the remaining non-specified columns will use the `remainder` estimator. The estimator must support [fit](../../glossary.html#term-fit) and [transform](../../glossary.html#term-transform). Note that using this feature requires that the DataFrame columns input at [fit](../../glossary.html#term-fit) and [transform](../../glossary.html#term-transform) have identical order.

**`Default Value`**

`'drop'`

#### Defined in

[generated/compose/ColumnTransformer.ts:396](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L396)

___

### sparse\_threshold

• `Optional` **sparse\_threshold**: `number`

If the output of the different transformers contains sparse matrices, these will be stacked as a sparse matrix if the overall density is lower than this value. Use `sparse\_threshold=0` to always return dense. When the transformed output consists of all dense data, the stacked result will be dense, and this keyword will be ignored.

**`Default Value`**

`0.3`

#### Defined in

[generated/compose/ColumnTransformer.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L403)

___

### transformer\_weights

• `Optional` **transformer\_weights**: `any`

Multiplicative weights for features per transformer. The output of the transformer is multiplied by these weights. Keys are transformer names, values the weights.

#### Defined in

[generated/compose/ColumnTransformer.ts:413](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L413)

___

### transformers

• `Optional` **transformers**: `any`

List of (name, transformer, columns) tuples specifying the transformer objects to be applied to subsets of the data.

#### Defined in

[generated/compose/ColumnTransformer.ts:389](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L389)

___

### verbose

• `Optional` **verbose**: `boolean`

If `true`, the time elapsed while fitting each transformer will be printed as it is completed.

**`Default Value`**

`false`

#### Defined in

[generated/compose/ColumnTransformer.ts:420](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L420)

___

### verbose\_feature\_names\_out

• `Optional` **verbose\_feature\_names\_out**: `boolean`

If `true`, [`get\_feature\_names\_out`](#sklearn.compose.ColumnTransformer.get_feature_names_out "sklearn.compose.ColumnTransformer.get_feature_names_out") will prefix all feature names with the name of the transformer that generated that feature. If `false`, [`get\_feature\_names\_out`](#sklearn.compose.ColumnTransformer.get_feature_names_out "sklearn.compose.ColumnTransformer.get_feature_names_out") will not prefix any feature names and will error if feature names are not unique.

**`Default Value`**

`true`

#### Defined in

[generated/compose/ColumnTransformer.ts:427](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/compose/ColumnTransformer.ts#L427)
