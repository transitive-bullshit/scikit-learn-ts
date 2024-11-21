**sklearn** • **Docs**

***

Target Encoder for regression and classification targets.

Each category is encoded based on a shrunk estimate of the average target values for observations belonging to the category. The encoding scheme mixes the global target mean with the target mean conditioned on the value of the category (see [\[MIC\]](#rf862141e5a0c-mic)).

When the target type is “multiclass”, encodings are based on the conditional probability estimate for each class. The target is first binarized using the “one-vs-all” scheme via [`LabelBinarizer`](sklearn.preprocessing.LabelBinarizer.html#sklearn.preprocessing.LabelBinarizer "sklearn.preprocessing.LabelBinarizer"), then the average target value for each class and each category is used for encoding, resulting in `n\_features` \* `n\_classes` encoded output features.

[`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") considers missing values, such as `np.nan` or `undefined`, as another category and encodes them like any other category. Categories that are not seen during [`fit`](#sklearn.preprocessing.TargetEncoder.fit "sklearn.preprocessing.TargetEncoder.fit") are encoded with the target mean, i.e. `target\_mean\_`.

For a demo on the importance of the `TargetEncoder` internal cross-fitting, see Target Encoder’s Internal Cross fitting. For a comparison of different encoders, refer to Comparing Target Encoder with Other Encoders. Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.TargetEncoder.html)

## Constructors

### new TargetEncoder()

> **new TargetEncoder**(`opts`?): [`TargetEncoder`](TargetEncoder.md)

#### Parameters

• **opts?**

• **opts.categories?**: `"auto"`

Categories (unique values) per feature:

**Default Value**

`'auto'`

• **opts.cv?**: `number`

Determines the number of folds in the cross fitting strategy used in [`fit\_transform`](#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform"). For classification targets, `StratifiedKFold` is used and for continuous targets, `KFold` is used.

**Default Value**

`5`

• **opts.random\_state?**: `number`

When `shuffle` is `true`, `random\_state` affects the ordering of the indices, which controls the randomness of each fold. Otherwise, this parameter has no effect. Pass an int for reproducible output across multiple function calls. See Glossary.

• **opts.shuffle?**: `boolean`

Whether to shuffle the data in [`fit\_transform`](#sklearn.preprocessing.TargetEncoder.fit_transform "sklearn.preprocessing.TargetEncoder.fit_transform") before splitting into folds. Note that the samples within each split will not be shuffled.

**Default Value**

`true`

• **opts.smooth?**: `number` \| `"auto"`

The amount of mixing of the target mean conditioned on the value of the category with the global target mean. A larger `smooth` value will put more weight on the global target mean. If `"auto"`, then `smooth` is set to an empirical Bayes estimate.

**Default Value**

`'auto'`

• **opts.target\_type?**: `"auto"` \| `"binary"` \| `"continuous"` \| `"multiclass"`

Type of target.

**Default Value**

`'auto'`

#### Returns

[`TargetEncoder`](TargetEncoder.md)

#### Defined in

[generated/preprocessing/TargetEncoder.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L23)

## Accessors

### categories\_

#### Get Signature

> **get** **categories\_**(): `Promise`\<`any`\>

The categories of each input feature determined during fitting or specified in `categories` (in order of the features in `X` and corresponding with the output of [`transform`](#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform")).

##### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:378](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L378)

***

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

If `target\_type\_` is ‘binary’ or ‘multiclass’, holds the label for each class, otherwise `undefined`.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:503](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L503)

***

### encodings\_

#### Get Signature

> **get** **encodings\_**(): `Promise`\<`any`[]\>

Encodings learnt on all of `X`. For feature `i`, `encodings\_\[i\]` are the encodings matching the categories listed in `categories\_\[i\]`. When `target\_type\_` is “multiclass”, the encoding for feature `i` and class `j` is stored in `encodings\_\[j + (i \* len(classes\_))\]`. E.g., for 2 features (f) and 3 classes (c), encodings are ordered: f0\_c0, f0\_c1, f0\_c2, f1\_c0, f1\_c1, f1\_c2,

##### Returns

`Promise`\<`any`[]\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:353](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L353)

***

### feature\_names\_in\_

#### Get Signature

> **get** **feature\_names\_in\_**(): `Promise`\<`ArrayLike`\>

Names of features seen during fit. Defined only when `X` has feature names that are all strings.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:478](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L478)

***

### n\_features\_in\_

#### Get Signature

> **get** **n\_features\_in\_**(): `Promise`\<`number`\>

Number of features seen during fit.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:453](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L453)

***

### py

#### Get Signature

> **get** **py**(): `PythonBridge`

##### Returns

`PythonBridge`

#### Set Signature

> **set** **py**(`pythonBridge`): `void`

##### Parameters

• **pythonBridge**: `PythonBridge`

##### Returns

`void`

#### Defined in

[generated/preprocessing/TargetEncoder.ts:74](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L74)

***

### target\_mean\_

#### Get Signature

> **get** **target\_mean\_**(): `Promise`\<`number`\>

The overall mean of the target. This value is only used in [`transform`](#sklearn.preprocessing.TargetEncoder.transform "sklearn.preprocessing.TargetEncoder.transform") to encode categories.

##### Returns

`Promise`\<`number`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:428](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L428)

***

### target\_type\_

#### Get Signature

> **get** **target\_type\_**(): `Promise`\<`string`\>

Type of target.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:403](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L403)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:126](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L126)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit the [`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") to X and y.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to determine the categories of each feature.

• **opts.y?**: `ArrayLike`

The target data used to encode the categories.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:143](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L143)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Fit [`TargetEncoder`](#sklearn.preprocessing.TargetEncoder "sklearn.preprocessing.TargetEncoder") and transform X with the target encoding.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to determine the categories of each feature.

• **opts.y?**: `ArrayLike`

The target data used to encode the categories.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:180](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L180)

***

### get\_feature\_names\_out()

> **get\_feature\_names\_out**(`opts`): `Promise`\<`any`\>

Get output feature names for transformation.

#### Parameters

• **opts**

• **opts.input\_features?**: `any`

Not used, present here for API consistency by convention.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:217](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L217)

***

### get\_metadata\_routing()

> **get\_metadata\_routing**(`opts`): `Promise`\<`any`\>

Get metadata routing of this object.

Please check User Guide on how the routing mechanism works.

#### Parameters

• **opts**

• **opts.routing?**: `any`

A [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") encapsulating routing information.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:253](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L253)

***

### init()

> **init**(`py`): `Promise`\<`void`\>

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Parameters

• **py**: `PythonBridge`

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:87](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L87)

***

### set\_output()

> **set\_output**(`opts`): `Promise`\<`any`\>

Set output container.

See Introducing the set\_output API for an example on how to use the API.

#### Parameters

• **opts**

• **opts.transform?**: `"default"` \| `"pandas"` \| `"polars"`

Configure output of `transform` and `fit\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:289](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L289)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`[]\>

Transform X with the target encoding.

#### Parameters

• **opts**

• **opts.X?**: `ArrayLike`[]

The data to determine the categories of each feature.

#### Returns

`Promise`\<`ArrayLike`[]\>

#### Defined in

[generated/preprocessing/TargetEncoder.ts:321](https://github.com/transitive-bullshit/scikit-learn-ts/blob/d6e32320dee888f62905b3bbdd6dc360aa066c30/packages/sklearn/src/generated/preprocessing/TargetEncoder.ts#L321)
