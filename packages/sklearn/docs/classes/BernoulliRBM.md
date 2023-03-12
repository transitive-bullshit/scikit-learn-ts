# BernoulliRBM

Bernoulli Restricted Boltzmann Machine (RBM).

A Restricted Boltzmann Machine with binary visible units and binary hidden units. Parameters are estimated using Stochastic Maximum Likelihood (SML), also known as Persistent Contrastive Divergence (PCD) \[2\].

The time complexity of this implementation is `O(d \*\* 2)` assuming d ~ n\_features ~ n\_components.

Read more in the [User Guide](../neural_networks_unsupervised.html#rbm).

[Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.neural_network.BernoulliRBM.html)

## Constructors

## constructor()

### Signature

```ts
new BernoulliRBM(opts?: BernoulliRBMOptions): BernoulliRBM;
```

### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`BernoulliRBMOptions`](../interfaces/BernoulliRBMOptions.md) |

### Returns

[`BernoulliRBM`](BernoulliRBM.md)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:27](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L27)

## Properties

### \_isDisposed

> `boolean`  = `false`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:25](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L25)

### \_isInitialized

> `boolean`  = `false`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:24](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L24)

### \_py

> `PythonBridge`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:23](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L23)

### id

> `string`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:20](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L20)

### opts

> `any`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:21](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L21)

## Accessors

### components\_

Weight matrix, where `n\_features` is the number of visible units and `n\_components` is the number of hidden units.

#### Signature

```ts
components_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L401)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:401](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L401)

### feature\_names\_in\_

Names of features seen during [fit](../../glossary.html#term-fit). Defined only when `X` has feature names that are all strings.

#### Signature

```ts
feature_names_in_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L476)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:476](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L476)

### h\_samples\_

Hidden Activation sampled from the model distribution, where `batch\_size` is the number of examples per minibatch and `n\_components` is the number of hidden units.

#### Signature

```ts
h_samples_(): Promise<ArrayLike[]>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L426)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:426](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L426)

### intercept\_hidden\_

Biases of the hidden units.

#### Signature

```ts
intercept_hidden_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L351)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:351](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L351)

### intercept\_visible\_

Biases of the visible units.

#### Signature

```ts
intercept_visible_(): Promise<ArrayLike>;
```

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L376)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:376](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L376)

### n\_features\_in\_

Number of features seen during [fit](../../glossary.html#term-fit).

#### Signature

```ts
n_features_in_(): Promise<number>;
```

#### Returns

`Promise`\<`number`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L451)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:451](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L451)

### py

#### Signature

```ts
py(): PythonBridge;
```

#### Returns

`PythonBridge`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L32)

#### Signature

```ts
py(pythonBridge: PythonBridge): void;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `pythonBridge` | `PythonBridge` |

#### Returns

`void`

Defined in:  [generated/neural\_network/BernoulliRBM.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L36)

Defined in:  [generated/neural\_network/BernoulliRBM.ts:32](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L32) [generated/neural\_network/BernoulliRBM.ts:36](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L36)

## Methods

### dispose()

Disposes of the underlying Python resources.

Once `dispose()` is called, the instance is no longer usable.

#### Signature

```ts
dispose(): Promise<void>;
```

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:91](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L91)

### fit()

Fit the model to the data X.

#### Signature

```ts
fit(opts: BernoulliRBMFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMFitOptions`](../interfaces/BernoulliRBMFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:108](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L108)

### fit\_transform()

Fit to data, then transform it.

Fits transformer to `X` and `y` with optional parameters `fit\_params` and returns a transformed version of `X`.

#### Signature

```ts
fit_transform(opts: BernoulliRBMFitTransformOptions): Promise<any[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMFitTransformOptions`](../interfaces/BernoulliRBMFitTransformOptions.md) |

#### Returns

`Promise`\<`any`[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:140](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L140)

### get\_feature\_names\_out()

Get output feature names for transformation.

The feature names out will prefixed by the lowercased class name. For example, if the transformer outputs 3 features, then the feature names out are: `\["class\_name0", "class\_name1", "class\_name2"\]`.

#### Signature

```ts
get_feature_names_out(opts: BernoulliRBMGetFeatureNamesOutOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMGetFeatureNamesOutOptions`](../interfaces/BernoulliRBMGetFeatureNamesOutOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:174](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L174)

### gibbs()

Perform one Gibbs sampling step.

#### Signature

```ts
gibbs(opts: BernoulliRBMGibbsOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMGibbsOptions`](../interfaces/BernoulliRBMGibbsOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:207](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L207)

### init()

Initializes the underlying Python resources.

This instance is not usable until the `Promise` returned by `init()` resolves.

#### Signature

```ts
init(py: PythonBridge): Promise<void>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `py` | `PythonBridge` |

#### Returns

`Promise`\<`void`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:45](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L45)

### partial\_fit()

Fit the model to the partial segment of the data X.

#### Signature

```ts
partial_fit(opts: BernoulliRBMPartialFitOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMPartialFitOptions`](../interfaces/BernoulliRBMPartialFitOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:235](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L235)

### score\_samples()

Compute the pseudo-likelihood of X.

#### Signature

```ts
score_samples(opts: BernoulliRBMScoreSamplesOptions): Promise<ArrayLike>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMScoreSamplesOptions`](../interfaces/BernoulliRBMScoreSamplesOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:265](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L265)

### set\_output()

Set output container.

See [Introducing the set\_output API](../../auto_examples/miscellaneous/plot_set_output.html#sphx-glr-auto-examples-miscellaneous-plot-set-output-py) for an example on how to use the API.

#### Signature

```ts
set_output(opts: BernoulliRBMSetOutputOptions): Promise<any>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMSetOutputOptions`](../interfaces/BernoulliRBMSetOutputOptions.md) |

#### Returns

`Promise`\<`any`\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:295](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L295)

### transform()

Compute the hidden layer activation probabilities, P(h=1|v=X).

#### Signature

```ts
transform(opts: BernoulliRBMTransformOptions): Promise<ArrayLike[]>;
```

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`BernoulliRBMTransformOptions`](../interfaces/BernoulliRBMTransformOptions.md) |

#### Returns

`Promise`\<[`ArrayLike`](../types/ArrayLike.md)[]\>

Defined in:  [generated/neural\_network/BernoulliRBM.ts:323](https://github.com/transitive-bullshit/scikit-learn-ts/blob/122b3c0/packages/sklearn/src/generated/neural_network/BernoulliRBM.ts#L323)
