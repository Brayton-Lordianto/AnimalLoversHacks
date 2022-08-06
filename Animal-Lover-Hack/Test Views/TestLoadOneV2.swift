//
//  TestLoadOneV2.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import SwiftUI
import RealityKit
import ARKit

struct TestLoadOneV2: View {
    let echoModel: EchoModel?
    var body: some View {
        testARLoadOneV2(echoModel: echoModel)
            .ignoresSafeArea()
    }
}

struct testARLoadOneV2 : UIViewRepresentable {
    let singleEntity: ModelEntity?
    
    init(echoModel: EchoModel?) {
        print("DEBUG: \(echoModel == nil ? "ECHOMODEL IS NIL" : "ECHOMODEL EXISTS")")
        if let echoModel = echoModel {
            self.singleEntity = EchoUsdzFileManager.getAsModelEntity(echoModel.storageFileID)
        } else { self.singleEntity = nil }
    }
    
    func makeUIView(context: Context) -> ARView {
        
        let arView = ARView(frame: .zero)
        
        // if the model exists, then make an ARView using this
        guard let entity = singleEntity else { print("DEBUG: NO MODEL IN ARVIEW"); return arView }
        let anchor = AnchorEntity(plane: .horizontal)
        anchor.addChild(entity)
        arView.installGestures([.all], for: entity)
        arView.scene.addAnchor(anchor)
        print("DEBUG: SUCCESS LOADING MODEL ENTITY")
        
        return arView
        
    }
    
    func updateUIView(_ uiView: ARView, context: Context) {}
    
}
