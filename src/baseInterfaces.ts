import { IRequestMethod } from './swaggerInterfaces'
import { IRequestMethods } from './requestCodegen'

export interface ISwaggerOptions {
  serviceNameSuffix?: string
  enumNamePrefix?: string
  methodNameMode?: 'operationId' | 'path' | 'custom'
  outputDir?: string
  fileName?: string
  remoteUrl?: string
  source?: any
  interfacesInsteadOfClasses?: boolean
  useStaticMethod?: boolean | undefined
  useCustomerRequestInstance?: boolean | undefined
  include?: Array<string | IInclude>
  format?: (s: string) => string
  customNamingCallback?: (requestMethod: IRequestMethods) => string
  multipleFileMode?: boolean
}

export interface IPropDef {
  name: string
  type: string
  desc: string
}

export interface IInclude {
  [key: string]: string[]
}
export interface IClassDef {
  name: string
  props: IPropDef[]
  imports: string[]
}

export interface IDefinitionClass {
  value: IClassDef
  name: string
}

export interface IDefinitionClasses {
  [key: string]: IDefinitionClass
}

export interface IEnumDef {
  name: string
  enumProps: string
}

export interface IDefinitionEnum {
  name: string
  value?: IEnumDef | null | undefined
  content?: string | null | undefined
}
export interface IDefinitionEnums {
  [key: string]: IDefinitionEnum
}
