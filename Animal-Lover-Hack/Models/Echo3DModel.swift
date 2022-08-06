//
//  Echo3DModel.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import Foundation

struct EchoModel {
    let filename: String
    let storageFileID: String
    let description: String
    var pathToDownloaded: URL {
        EchoUsdzFileManager.getPathIfExists(fileName: self.filename).0
    }
}
