declare module 'mysql' {
    import { EventEmitter } from 'events';

    export interface MysqlError extends Error {
        code: string;
        errno: number;
        sqlState?: string;
        sqlMessage?: string;
    }

    export interface ConnectionConfig {
        host?: string;
        port?: number;
        user?: string;
        password?: string;
        database?: string;
    }

    export interface QueryOptions {
        sql: string;
        timeout?: number;
        values?: any[];
    }

    export interface Query {
        sql: string;
        values?: any[];
        on(event: 'error', listener: (err: MysqlError) => void): this;
        on(event: 'fields', listener: (fields: any[]) => void): this;
        on(event: 'result', listener: (row: any) => void): this;
        on(event: 'end', listener: () => void): this;
    }

    export interface Connection extends EventEmitter {
        config: ConnectionConfig;
        connect(callback?: (err: MysqlError) => void): void;
        query(
            query: string | QueryOptions,
            values?: any[],
            callback?: (err: MysqlError | null, results?: any, fields?: any) => void
        ): Query;
        end(callback?: (err: MysqlError) => void): void;
    }

    export function createConnection(config: ConnectionConfig): Connection;
}