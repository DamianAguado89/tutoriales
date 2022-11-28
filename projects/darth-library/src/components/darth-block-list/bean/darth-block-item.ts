import { DarthAction } from '../../../common/darth-action';
export class DarthBlockItem<T> {
    item: T;
    borderColor?: string;
    actions?: DarthAction<T>[];
}