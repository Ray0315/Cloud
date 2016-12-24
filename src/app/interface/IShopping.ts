export interface ISpec {
    /**
     * 時間
     */
    time: ITime;
    /**
     * 網路
     */
    network: INetwork;
    /**
     * 伺服器
     */
    server: IServer;
}

export interface ISet {
    /**
     *  虛擬伺服器
     */
    vm: number;
    /**
     * 子網路
     */
    subnetwork: string;
    /**
     * 權限
     */
    access: string;
    /**
     * 自動配置對外網路
     */
    outnetwork: string;
    /**
     * 資安防護
     */
    safe: ISafe[];
}

export interface ISafe {
    /**
     *  虛擬伺服器
     */
    id: number;
    /**
     * 子網路
     */
    name: string;
    /**
     * 權限
     */
    status: Boolean;
}

export interface IHdd {
    /**
     * 名字
     */
    name: string;
    /**
     * 空間大小
     */
    space: number;
    /**
     * 裝置
     */
    device: string;
}

export interface ISll {
    /**
     * 金鑰名稱
     */
    key: string;
    /**
     * 值
     */
    value: string;
}

export interface IOs {
    /**
     * 編號
     */
    id: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 費用
     */
    cost: number;
}

export interface INetwork {
    /**
     * 編號
     */
    id: number;
    /**
     * 名字
     */
    flow: string;
    /**
     * 單位
     */
    unit: string;
    /**
     * 費用
     */
    cost: number;
}

export interface IServer {
    /**
     * 編號
     */
    id: number;
    /**
     * 名字
     */
    name: string;
    /**
     * 費用
     */
    cost: number;
}



export interface IInfomation {
    /**
     * 編號
     */
    id: number;
    /**
     * 名字
     */
    name: string;
}

export interface ITime {
    /**
     * 編號
     */
    id: number;
    /**
     * 天數
     */
    day: number;
    /**
     * 單位
     */
    unit: string;
}

export interface IGroup {
    /**
     * 型態
     */
    type: string;
    /**
     * Port開始處
     */
    start: string;
    /**
     * Port結束處
     */
    end: string;
    /**
     * IP
     */
    ip: string;
    /**
     * 網路遮罩
     */
    mask: string;
}

export interface IShopping {
    /**
     * 選擇作業系統
     */
    os: IOs;
    /**
     * 選擇硬體規格
     */
    spec: ISpec;
    /**
     * 設定虛擬伺服器
     */
    set: ISet;
    /**
     * 新增硬碟空間
     */
    hdd: IHdd[];
    /**
     * 新增SSH金鑰
     */
    sll: ISll[];
    /**
     * 設定新的安全群組
     */
    group: IGroup[];
}
