# FeatureUnionOptions

## Properties

### n\_jobs?

> `number`

Number of jobs to run in parallel. `undefined` means 1 unless in a [`joblib.parallel\_backend`](https://joblib.readthedocs.io/en/latest/parallel.html#joblib.parallel_backend "(in joblib v1.3.0.dev0)") context. `\-1` means using all processors. See [Glossary](../../glossary.html#term-n_jobs) for more details.

Defined in:  [generated/pipeline/FeatureUnion.ts:291](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L291)

### transformer\_list?

> `any`

List of transformer objects to be applied to the data. The first half of each tuple is the name of the transformer. The transformer can be ‘drop’ for it to be ignored or can be ‘passthrough’ for features to be passed unchanged.

Defined in:  [generated/pipeline/FeatureUnion.ts:286](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L286)

### transformer\_weights?

> `any`

Multiplicative weights for features per transformer. Keys are transformer names, values the weights. Raises ValueError if key not present in `transformer\_list`.

Defined in:  [generated/pipeline/FeatureUnion.ts:296](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L296)

### verbose?

> `boolean`

If `true`, the time elapsed while fitting each transformer will be printed as it is completed.

#### Default Value

`false`

Defined in:  [generated/pipeline/FeatureUnion.ts:303](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/pipeline/FeatureUnion.ts#L303)
