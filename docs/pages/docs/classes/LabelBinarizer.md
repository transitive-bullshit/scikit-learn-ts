**sklearn** • **Docs**

***

Binarize labels in a one-vs-all fashion.

Several regression and binary classification algorithms are available in scikit-learn. A simple way to extend these algorithms to the multi-class classification case is to use the so-called one-vs-all scheme.

At learning time, this simply consists in learning one regressor or binary classifier per class. In doing so, one needs to convert multi-class labels to binary labels (belong or does not belong to the class). `LabelBinarizer` makes this process easy with the transform method.

At prediction time, one assigns the class for which the corresponding model gave the greatest confidence. `LabelBinarizer` makes this easy with the [`inverse\_transform`](#sklearn.preprocessing.LabelBinarizer.inverse_transform "sklearn.preprocessing.LabelBinarizer.inverse_transform") method.

Read more in the User Guide.

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.LabelBinarizer.html)

## Constructors

### new LabelBinarizer()

> **new LabelBinarizer**(`opts`?): [`LabelBinarizer`](LabelBinarizer.md)

#### Parameters

• **opts?**

• **opts.neg\_label?**: `number`

Value with which negative labels must be encoded.

**Default Value**

`0`

• **opts.pos\_label?**: `number`

Value with which positive labels must be encoded.

**Default Value**

`1`

• **opts.sparse\_output?**: `boolean`

True if the returned array from transform is desired to be in sparse CSR format.

**Default Value**

`false`

#### Returns

[`LabelBinarizer`](LabelBinarizer.md)

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:29](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L29)

## Properties

### \_isDisposed

> **\_isDisposed**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L27)

***

### \_isInitialized

> **\_isInitialized**: `boolean` = `false`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:26](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L26)

***

### \_py

> **\_py**: `PythonBridge`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L25)

***

### id

> **id**: `string`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:22](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L22)

***

### opts

> **opts**: `any`

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L23)

## Accessors

### classes\_

#### Get Signature

> **get** **classes\_**(): `Promise`\<`ArrayLike`\>

Holds the label for each class.

##### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:375](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L375)

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

[generated/preprocessing/LabelBinarizer.ts:55](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L55)

***

### sparse\_input\_

#### Get Signature

> **get** **sparse\_input\_**(): `Promise`\<`boolean`\>

`false` otherwise.

##### Returns

`Promise`\<`boolean`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:425](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L425)

***

### y\_type\_

#### Get Signature

> **get** **y\_type\_**(): `Promise`\<`string`\>

Represents the type of the target data as evaluated by [`type\_of\_target`](sklearn.utils.multiclass.type_of_target.html#sklearn.utils.multiclass.type_of_target "sklearn.utils.multiclass.type_of_target"). Possible type are ‘continuous’, ‘continuous-multioutput’, ‘binary’, ‘multiclass’, ‘multiclass-multioutput’, ‘multilabel-indicator’, and ‘unknown’.

##### Returns

`Promise`\<`string`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:400](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L400)

## Methods

### dispose()

> **dispose**(): `Promise`\<`void`\>

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Returns

`Promise`\<`void`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:107](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L107)

***

### fit()

> **fit**(`opts`): `Promise`\<`any`\>

Fit label binarizer.

#### Parameters

• **opts**

• **opts.y?**: `ArrayLike`

Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:124](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L124)

***

### fit\_transform()

> **fit\_transform**(`opts`): `Promise`\<`ArrayLike`\>

Fit label binarizer/transform multi-class labels to binary labels.

The output of transform is sometimes referred to as the 1-of-K coding scheme.

#### Parameters

• **opts**

• **opts.y?**: `any`

Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:158](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L158)

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

[generated/preprocessing/LabelBinarizer.ts:192](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L192)

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

[generated/preprocessing/LabelBinarizer.ts:68](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L68)

***

### inverse\_transform()

> **inverse\_transform**(`opts`): `Promise`\<`any`\>

Transform binary labels back to multi-class labels.

#### Parameters

• **opts**

• **opts.threshold?**: `number`

Threshold used in the binary and multi-label cases.

Use 0 when `Y` contains the output of decision\_function (classifier). Use 0.5 when `Y` contains the output of predict\_proba.

If `undefined`, the threshold is assumed to be half way between neg\_label and pos\_label.

• **opts.Y?**: `ArrayLike`

Target values. All sparse matrices are converted to CSR before inverse transformation.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:226](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L226)

***

### set\_inverse\_transform\_request()

> **set\_inverse\_transform\_request**(`opts`): `Promise`\<`any`\>

Request metadata passed to the `inverse\_transform` method.

Note that this method is only relevant if `enable\_metadata\_routing=True` (see [`sklearn.set\_config`](sklearn.set_config.html#sklearn.set_config "sklearn.set_config")). Please see User Guide on how the routing mechanism works.

The options for each parameter are:

#### Parameters

• **opts**

• **opts.threshold?**: `string` \| `boolean`

Metadata routing for `threshold` parameter in `inverse\_transform`.

#### Returns

`Promise`\<`any`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:273](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L273)

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

[generated/preprocessing/LabelBinarizer.ts:309](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L309)

***

### transform()

> **transform**(`opts`): `Promise`\<`ArrayLike`\>

Transform multi-class labels to binary labels.

The output of transform is sometimes referred to by some authors as the 1-of-K coding scheme.

#### Parameters

• **opts**

• **opts.y?**: `any`

Target values. The 2-d matrix should only contain 0 and 1, represents multilabel classification. Sparse matrix can be CSR, CSC, COO, DOK, or LIL.

#### Returns

`Promise`\<`ArrayLike`\>

#### Defined in

[generated/preprocessing/LabelBinarizer.ts:343](https://github.com/transitive-bullshit/scikit-learn-ts/blob/0c1bb72d9c175bd83cea17bef83f84e3230eb739/packages/sklearn/src/generated/preprocessing/LabelBinarizer.ts#L343)
