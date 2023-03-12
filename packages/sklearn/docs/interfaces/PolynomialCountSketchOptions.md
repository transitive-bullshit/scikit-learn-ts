[sklearn](../readme.md) / [Exports](../modules.md) / PolynomialCountSketchOptions

# Interface: PolynomialCountSketchOptions

## Table of contents

### Properties

- [coef0](PolynomialCountSketchOptions.md#coef0)
- [degree](PolynomialCountSketchOptions.md#degree)
- [gamma](PolynomialCountSketchOptions.md#gamma)
- [n\_components](PolynomialCountSketchOptions.md#n_components)
- [random\_state](PolynomialCountSketchOptions.md#random_state)

## Properties

### coef0

• `Optional` **coef0**: `number`

Constant term of the polynomial kernel whose feature map will be approximated.

**`Default Value`**

`0`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:412](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L412)

___

### degree

• `Optional` **degree**: `number`

Degree of the polynomial kernel whose feature map will be approximated.

**`Default Value`**

`2`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:405](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L405)

___

### gamma

• `Optional` **gamma**: `number`

Parameter of the polynomial kernel whose feature map will be approximated.

**`Default Value`**

`1`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:398](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L398)

___

### n\_components

• `Optional` **n\_components**: `number`

Dimensionality of the output feature space. Usually, `n\_components` should be greater than the number of features in input samples in order to achieve good performance. The optimal score / run time balance is typically achieved around `n\_components` = 10 \* `n\_features`, but this depends on the specific dataset being used.

**`Default Value`**

`100`

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:419](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L419)

___

### random\_state

• `Optional` **random\_state**: `number`

Determines random number generation for indexHash and bitHash initialization. Pass an int for reproducible results across multiple function calls. See [Glossary](../../glossary.html#term-random_state).

#### Defined in

[generated/kernel_approximation/PolynomialCountSketch.ts:424](https://github.com/transitive-bullshit/scikit-learn-ts/blob/367336a/packages/sklearn/src/generated/kernel_approximation/PolynomialCountSketch.ts#L424)
