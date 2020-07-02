import { always, Arity0Fn, equals, ifElse } from 'ramda'

const renderWhen = (pred: (arg) => boolean, fn: Arity0Fn) => ifElse(pred, fn, always(null))

const renderWhenTrue = (fn: Arity0Fn) => renderWhen(equals(true), fn)

export { renderWhen, renderWhenTrue }
