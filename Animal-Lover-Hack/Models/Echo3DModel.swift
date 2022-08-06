//
//  Echo3DModel.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import Foundation



class ViewModel: ObservableObject {
    @Published var echoModels = [EchoModel]()
    
    // easy access if needed
    var echoModelNames: [String] { echoModels.map { $0.name } }
    var echoModelPaths: [URL] { echoModels.map { $0.pathToDownloaded } }
    
    init() {
        // load all the models
        getDataAsNSDict(completion: encodeIntoModel)
        self.echoModels = models
    }
}

struct EchoModel {
    var name: String {
        guard filename.hasSuffix(".usdz") else { return "No USDZ File" }
        let suffixIndex = filename.index(filename.endIndex, offsetBy: -5)
        return filename.prefix(upTo: suffixIndex).replacingOccurrences(of: "_", with: " ")
    }
    let filename: String
    let storageFileID: String
    let description: String
    var pathToDownloaded: URL {
        EchoUsdzFileManager.getPathIfExists(fileName: self.filename).0
    }
}
