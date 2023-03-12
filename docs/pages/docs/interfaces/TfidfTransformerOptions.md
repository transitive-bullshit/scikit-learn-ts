# TfidfTransformerOptions

## Properties

### norm?

> `"l1"` \| `"l2"`

Each output row will have unit norm, either:

#### Default Value

`'l2'`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L341)

### smooth\_idf?

> `boolean`

Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

#### Default Value

`true`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L355)

### sublinear\_tf?

> `boolean`

Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

#### Default Value

`false`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L362)

### use\_idf?

> `boolean`

Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

#### Default Value

`true`

Defined in:  [generated/feature\_extraction/text/TfidfTransformer.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L348)
