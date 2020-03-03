import React from 'react'
import * as actions from '../Actions'
import initialState from '../States/initial.state'
import useGlobalHook from './useGlobalHook'

export const useGlobal = useGlobalHook(React, initialState, actions)

export default useGlobal
