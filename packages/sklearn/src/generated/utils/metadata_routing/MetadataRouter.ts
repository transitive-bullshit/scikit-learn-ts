/* eslint-disable */
/* NOTE: This file is auto-generated. Do not edit it directly. */

import crypto from 'node:crypto'

import { PythonBridge, NDArray, ArrayLike, SparseMatrix } from '@/sklearn/types'

/**
  Stores and handles metadata routing for a router object.

  This class is used by router objects to store and handle metadata routing. Routing information is stored as a dictionary of the form `{"object\_name": RouteMappingPair(method\_mapping, routing\_info)}`, where `method\_mapping` is an instance of [`MethodMapping`](sklearn.utils.metadata_routing.MethodMapping.html#sklearn.utils.metadata_routing.MethodMapping "sklearn.utils.metadata_routing.MethodMapping") and `routing\_info` is either a [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest") or a [`MetadataRouter`](#sklearn.utils.metadata_routing.MetadataRouter "sklearn.utils.metadata_routing.MetadataRouter") instance.

  [Python Reference](https://scikit-learn.org/stable/modules/generated/sklearn.utils.metadata_routing.MetadataRouter.html)
 */
export class MetadataRouter {
  id: string
  opts: any

  _py: PythonBridge
  _isInitialized: boolean = false
  _isDisposed: boolean = false

  constructor(opts?: {
    /**
      The name of the object to which these requests belong.
     */
    owner?: string
  }) {
    this.id = `MetadataRouter${crypto.randomUUID().split('-')[0]}`
    this.opts = opts || {}
  }

  get py(): PythonBridge {
    return this._py
  }

  set py(pythonBridge: PythonBridge) {
    this._py = pythonBridge
  }

  /**
    Initializes the underlying Python resources.

    This instance is not usable until the `Promise` returned by `init()` resolves.
   */
  async init(py: PythonBridge): Promise<void> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (this._isInitialized) {
      return
    }

    if (!py) {
      throw new Error('MetadataRouter.init requires a PythonBridge instance')
    }

    this._py = py

    await this._py.ex`
import numpy as np
from sklearn.utils.metadata_routing import MetadataRouter
try: bridgeMetadataRouter
except NameError: bridgeMetadataRouter = {}
`

    // set up constructor params
    await this._py
      .ex`ctor_MetadataRouter = {'owner': ${this.opts['owner'] ?? undefined}}

ctor_MetadataRouter = {k: v for k, v in ctor_MetadataRouter.items() if v is not None}`

    await this._py
      .ex`bridgeMetadataRouter[${this.id}] = MetadataRouter(**ctor_MetadataRouter)`

    this._isInitialized = true
  }

  /**
    Disposes of the underlying Python resources.

    Once `dispose()` is called, the instance is no longer usable.
   */
  async dispose() {
    if (this._isDisposed) {
      return
    }

    if (!this._isInitialized) {
      return
    }

    await this._py.ex`del bridgeMetadataRouter[${this.id}]`

    this._isDisposed = true
  }

  /**
    Add named objects with their corresponding method mapping.
   */
  async add(opts: {
    /**
      The mapping between the child and the parent’s methods.
     */
    method_mapping?: any

    /**
      A dictionary of objects from which metadata is extracted by calling [`get\_routing\_for\_object`](sklearn.utils.metadata_routing.get_routing_for_object.html#sklearn.utils.metadata_routing.get_routing_for_object "sklearn.utils.metadata_routing.get_routing_for_object") on them.
     */
    objs?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MetadataRouter must call init() before add()')
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRouter_add = {'method_mapping': ${opts['method_mapping'] ?? undefined}, 'objs': ${opts['objs'] ?? undefined}}

pms_MetadataRouter_add = {k: v for k, v in pms_MetadataRouter_add.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRouter_add = bridgeMetadataRouter[${this.id}].add(**pms_MetadataRouter_add)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRouter_add.tolist() if hasattr(res_MetadataRouter_add, 'tolist') else res_MetadataRouter_add`
  }

  /**
    Add `self` (as a consumer) to the routing.

    This method is used if the router is also a consumer, and hence the router itself needs to be included in the routing. The passed object can be an estimator or a [`MetadataRequest`](sklearn.utils.metadata_routing.MetadataRequest.html#sklearn.utils.metadata_routing.MetadataRequest "sklearn.utils.metadata_routing.MetadataRequest").

    A router should add itself using this method instead of `add` since it should be treated differently than the other objects to which metadata is routed by the router.
   */
  async add_self_request(opts: {
    /**
      This is typically the router instance, i.e. `self` in a `get\_metadata\_routing()` implementation. It can also be a `MetadataRequest` instance.
     */
    obj?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MetadataRouter must call init() before add_self_request()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRouter_add_self_request = {'obj': ${opts['obj'] ?? undefined}}

pms_MetadataRouter_add_self_request = {k: v for k, v in pms_MetadataRouter_add_self_request.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRouter_add_self_request = bridgeMetadataRouter[${this.id}].add_self_request(**pms_MetadataRouter_add_self_request)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRouter_add_self_request.tolist() if hasattr(res_MetadataRouter_add_self_request, 'tolist') else res_MetadataRouter_add_self_request`
  }

  /**
    Check whether the given parameters are consumed by the given method.
   */
  async consumes(opts: {
    /**
      The name of the method to check.
     */
    method?: string

    /**
      An iterable of parameters to check.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MetadataRouter must call init() before consumes()')
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRouter_consumes = {'method': ${opts['method'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_MetadataRouter_consumes = {k: v for k, v in pms_MetadataRouter_consumes.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRouter_consumes = bridgeMetadataRouter[${this.id}].consumes(**pms_MetadataRouter_consumes)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRouter_consumes.tolist() if hasattr(res_MetadataRouter_consumes, 'tolist') else res_MetadataRouter_consumes`
  }

  /**
    Return the input parameters requested by child objects.

    The output of this method is a bunch, which includes the metadata for all methods of each child object that is used in the router’s `caller` method.

    If the router is also a consumer, it also checks for warnings of `self`’s/consumer’s requested metadata.
   */
  async route_params(opts: {
    /**
      The name of the method for which the parameters are requested and routed. If called inside the [fit](../../glossary.html#term-fit) method of a router, it would be `"fit"`.
     */
    caller?: string

    /**
      A dictionary of provided metadata.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error('MetadataRouter must call init() before route_params()')
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRouter_route_params = {'caller': ${opts['caller'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_MetadataRouter_route_params = {k: v for k, v in pms_MetadataRouter_route_params.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRouter_route_params = bridgeMetadataRouter[${this.id}].route_params(**pms_MetadataRouter_route_params)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRouter_route_params.tolist() if hasattr(res_MetadataRouter_route_params, 'tolist') else res_MetadataRouter_route_params`
  }

  /**
    Validate given metadata for a method.

    This raises a `TypeError` if some of the passed metadata are not understood by child objects.
   */
  async validate_metadata(opts: {
    /**
      The name of the method for which the parameters are requested and routed. If called inside the [fit](../../glossary.html#term-fit) method of a router, it would be `"fit"`.
     */
    method?: string

    /**
      A dictionary of provided metadata.
     */
    params?: any
  }): Promise<any> {
    if (this._isDisposed) {
      throw new Error('This MetadataRouter instance has already been disposed')
    }

    if (!this._isInitialized) {
      throw new Error(
        'MetadataRouter must call init() before validate_metadata()'
      )
    }

    // set up method params
    await this._py
      .ex`pms_MetadataRouter_validate_metadata = {'method': ${opts['method'] ?? undefined}, 'params': ${opts['params'] ?? undefined}}

pms_MetadataRouter_validate_metadata = {k: v for k, v in pms_MetadataRouter_validate_metadata.items() if v is not None}`

    // invoke method
    await this._py
      .ex`res_MetadataRouter_validate_metadata = bridgeMetadataRouter[${this.id}].validate_metadata(**pms_MetadataRouter_validate_metadata)`

    // convert the result from python to node.js
    return this
      ._py`res_MetadataRouter_validate_metadata.tolist() if hasattr(res_MetadataRouter_validate_metadata, 'tolist') else res_MetadataRouter_validate_metadata`
  }
}
