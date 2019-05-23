import deepmerge from 'deepmerge'
import { Validator } from 'tsdv-joi'
import { validateJoiResult } from '~/validators/helpers/validatorHelper'
import { IMessages } from '~/validators/IMessages'

export interface ValidationOptions {
    messages: IMessages
}

export class ValidatorLBS {
    private options?: ValidationOptions

    constructor(options?: ValidationOptions) {
        this.options = options
    }

    public validate<T>(object: T, options ?: ValidationOptions): T {
        return validateJoiResult(new Validator({abortEarly: false}).validate(object), deepmerge(this.options ? this.options : {}, options || {}).messages)
    }

}
