declare var _isWindows: boolean

type ContextSetter<T> = React.Dispatch<React.SetStateAction<T>>

type AppSetting = {
  enableUpperCase: boolean
  enableNumbers: boolean
  enableSymbols: boolean
}
