export type GuardVariable<T extends unknown> = { [key: string]: T };

class against {
    static null<T>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.null: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.null: '${name}' is null.` : message;

            if (value === null) throw TypeError(submessage, options);
        }

        return this;
    }
    static undefined<T>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.undefined: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.undefined: '${name}' is undefined.` : message;

            if (value === undefined) throw TypeError(submessage, options);
        }

        return this;
    }
    static empty<T extends string | unknown[] | {}>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.empty: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.empty: '${name}' is empty.` : message;

            if (typeof value === 'string' && value.length === 0) throw RangeError(submessage, options);
            if (typeof value === 'object' && Object.keys(value).length === 0) throw RangeError(submessage, options);
            if (Object.keys(value).length === 0) throw RangeError(submessage, options);
        }

        return this;
    }
    static outOfRange<T extends number | string>(variables: GuardVariable<T>, minimum: number, maximum: number, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.outOfRange: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.outOfRange: '${name}' is out of range.` : message;

            if (typeof value === 'string' && (value.length < minimum || value.length > maximum)) throw RangeError(submessage, options);
            if (typeof value === 'number' && (value < minimum || value > maximum)) throw RangeError(submessage, options);
        }

        return this;
    }
    static less<T extends number | string>(variables: GuardVariable<T>, minimum: number, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.less: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.less: '${name}' is less then ${minimum}.` : message;

            if (typeof value === 'string' && value.length < minimum) throw RangeError(submessage, options);
            if (typeof value === 'number' && value < minimum) throw RangeError(submessage, options);
        }

        return this;
    }
    static bigger<T extends number | string>(variables: GuardVariable<T>, maximum: number, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.against.bigger: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.against.bigger: '${name}' is bigger then ${maximum}.` : message;

            if (typeof value === 'string' && value.length > maximum) throw RangeError(submessage, options);
            if (typeof value === 'number' && value > maximum) throw RangeError(submessage, options);
        }

        return this;
    }
}

class is {
    static number<T extends number>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.number: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.number: '${name}' is not a number.` : message;

            if (typeof value !== 'number') throw TypeError(submessage, options);
        }

        return this;
    }
    static string<T extends string>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.string: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.string: '${name}' is not a string.` : message;

            if (typeof value !== 'string') throw TypeError(submessage, options);
        }

        return this;
    }
    static boolean<T extends boolean>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.boolean: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.boolean: '${name}' is not a boolean.` : message;

            if (typeof value !== 'boolean') throw TypeError(submessage, options);
        }

        return this;
    }
    static object<T extends object>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.object: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.object: '${name}' is not a object.` : message;

            if (typeof value !== 'object') throw TypeError(submessage, options);
        }

        return this;
    }
    static bigint<T extends bigint>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.bigint: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.bigint: '${name}' is not a bigint.` : message;

            if (typeof value !== 'bigint') throw TypeError(submessage, options);
        }

        return this;
    }
    static symbol<T extends symbol>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.symbol: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.symbol: '${name}' is not a symbol.` : message;

            if (typeof value !== 'symbol') throw TypeError(submessage, options);
        }

        return this;
    }
    static undefined<T extends undefined>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.undefined: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.undefined: '${name}' is not a undefined.` : message;

            if (typeof value !== 'undefined') throw TypeError(submessage, options);
        }

        return this;
    }
    static null<T extends null>(variables: GuardVariable<T>, message?: string, options?: ErrorOptions) {
        let length: number = Object.keys(variables).length;

        if (Object.keys(variables).length === 0) throw Error(`guard.is.null: variables given is of wrong format.`, options);
        for (let index = 0; index < length; index ++) {
            let name = Object.keys(variables)[index];
            let value = variables[name];
            let submessage = message === undefined? `guard.is.null: '${name}' is not a null.` : message;

            if (value !== null) throw TypeError(submessage, options);
        }

        return this;
    }
}

export class guard {
    static against = against;
    static is = is;
}