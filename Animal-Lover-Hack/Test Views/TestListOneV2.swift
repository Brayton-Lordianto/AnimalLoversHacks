//
//  TestListOneV2.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import SwiftUI

struct TestListOneV2: View {
    let echomodel: EchoModel?
    var body: some View {
        if let echomodel = echomodel {
            Form {
                Text(echomodel.id)
                Text(echomodel.name)
                Text(echomodel.filename)
                Text(echomodel.pathToDownloaded.description)
                Text(echomodel.description)
            }
        }
    }
}
