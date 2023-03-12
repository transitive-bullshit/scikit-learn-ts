[sklearn](../readme.md) / [Exports](../modules.md) / TfidfTransformerOptions

# Interface: TfidfTransformerOptions

## Table of contents

### Properties

- [norm](TfidfTransformerOptions.md#norm)
- [smooth\_idf](TfidfTransformerOptions.md#smooth_idf)
- [sublinear\_tf](TfidfTransformerOptions.md#sublinear_tf)
- [use\_idf](TfidfTransformerOptions.md#use_idf)

## Properties

### norm

• `Optional` **norm**: ``"l1"`` \| ``"l2"``

Each output row will have unit norm, either:

**`Default Value`**

`'l2'`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:341](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L341)

___

### smooth\_idf

• `Optional` **smooth\_idf**: `boolean`

Smooth idf weights by adding one to document frequencies, as if an extra document was seen containing every term in the collection exactly once. Prevents zero divisions.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:355](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L355)

___

### sublinear\_tf

• `Optional` **sublinear\_tf**: `boolean`

Apply sublinear tf scaling, i.e. replace tf with 1 + log(tf).

**`Default Value`**

`false`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:362](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L362)

___

### use\_idf

• `Optional` **use\_idf**: `boolean`

Enable inverse-document-frequency reweighting. If `false`, idf(t) = 1.

**`Default Value`**

`true`

#### Defined in

[generated/feature_extraction/text/TfidfTransformer.ts:348](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/feature_extraction/text/TfidfTransformer.ts#L348)
