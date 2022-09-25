import { JsonFragmentType, Result } from '@ethersproject/abi';
declare type Params = any[];
declare class Abi {
    static encode(name: string, jsonInputs: readonly JsonFragmentType[], params: Params): string;
    static encodeConstructor(jsonInputs: readonly JsonFragmentType[], params: Params): string;
    static decode(name: string, jsonOutputs: readonly JsonFragmentType[], data: string): Result;
}
export { Params };
export default Abi;
//# sourceMappingURL=abi.d.ts.map