declare module Vuls {
    export type NewCveContentType =
        "nvd"
        | "jvn"
        | "redhat"
        | "centos"
        | "alma"
        | "rocky"
        | "oracle"
        | "ubuntu"
        | "debian"
        | "redhat_api"
        | "debian_security_tracker"
        | "ubuntu_api"
        | "microsoft"
        | "wordpress"
        | "amazon"
        | "trivy"
        | "GitHub";

    export type Lang = "en"|"ja";

    export interface Container {
        containerID: string;
        name: string;
        image: string;
        type: string;
        uuid: string;
    }

    export interface Platform {
        name: string;
        instanceID: string;
    }

    export interface Confidence {
        score: number;
        detectionMethod: string;
    }

    export interface AffectedPackage {
        name: string;
        notFixedYet: boolean;
        fixState: string;
    }

    export interface Reference {
        link: string;
        source: string;
        tags: string[];
    }

    export interface CveContent {
        type: string;
        cveID: string;
        title: string;
        summary: string;
        cvss2Score: number;
        cvss2Vector: string;
        cvss2Severity: string;
        cvss3Score: number;
        cvss3Vector: string;
        cvss3Severity: string;
        sourceLink: string;
        references: Reference[];
        cweIDs: string[];
        published: Date;
        lastModified: Date;
    }

    export interface CveContents {
        [name: string]: CveContent;
    }

    export interface AlertDict {
        [lang: string]: null | string;
    }

    export interface ScannedCve {
        cveID: string;
        confidences: Confidence[];
        affectedPackages: AffectedPackage[];
        cveContents: CveContents;
        alertDict: AlertDict;
    }

    export interface ScannedCves {
        [cve: string]: ScannedCve;
    }

    export interface RunningKernel {
        release: string;
        version: string;
        rebootRequired: boolean;
    }

    export interface Package {
        name: string;
        version: string;
        release: string;
        newVersion: string;
        newRelease: string;
        arch: string;
        repository: string;
    }

    export interface Packages {
        [name: string]: Package;
    }

    export interface SrcPackage {
        name: string;
        version: string;
        arch: string;
        binaryNames: string[];
    }

    export interface SrcPackages {
        [name: string]: SrcPackage;
    }

    export interface Cwe {
        cweID: string;
        name: string;
        description: string;
        extendedDescription: string;
    }

    export interface CweDict {
        [number: number]: Cwe;
    }

    export interface Default {
        // TODO
    }

    export interface Wordpress {
        // TODO
    }

    export interface Portscan {
        // TODO
    }

    export interface Server {
        serverName: string;
        user: string;
        host: string;
        port: string;
        sshConfigPath: string;
        keyPath: string;
        scanMode: string[];
        wordpress: Wordpress;
        portscan: Portscan;
    }

    export interface Servers {
        [serverName: string]: Server;
    }

    export interface Dict {
        Name: string;
        Type: string;
        SQLite3Path: string;
        DebugSQL: boolean;
    }

    export interface Scan {
        logDir: string;
        resultsDir: string;
        default: Default;
        servers: Servers;
        cveDict: Dict;
        ovalDict: Dict;
        gost: Dict;
        exploit: Dict;
        metasploit: Dict;
    }

    export interface Report {
        logDir: string;
        resultsDir: string;
        default: Default;
        servers: Servers;
        cveDict: Dict;
        ovalDict: Dict;
        gost: Dict;
        exploit: Dict;
        metasploit: Dict;
        trivyCacheDBDir: string;
        lang: Lang;
    }

    export interface Config {
        scan: Scan;
        report: Report;
    }

    export interface ScanResult {
        jsonVersion: number;
        lang: Lang;
        serverUUID: string;
        serverName: string;
        family: string;
        release: string;
        container: Container;
        platform: Platform;
        ipv4Addrs: string[];
        ipv6Addrs: string[];
        scannedAt: Date;
        scanMode: string;
        scannedVersion: string;
        scannedRevision: string;
        scannedBy: string;
        scannedVia: string;
        scannedIpv4Addrs: string[];
        reportedAt: Date;
        reportedVersion: string;
        reportedRevision: string;
        reportedBy: string;
        errors: any[];
        warnings: any[];
        scannedCves: ScannedCves;
        runningKernel: RunningKernel;
        packages: Packages;
        SrcPackages: SrcPackages;
        cweDict: CweDict;
        config: Config;
    }

}

