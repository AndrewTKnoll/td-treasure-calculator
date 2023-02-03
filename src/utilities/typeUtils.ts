export type KeyOfType<BaseType, TargetType> = keyof {
	[Property in keyof BaseType as BaseType[Property] extends TargetType ? Property : never]: BaseType[Property]
}
