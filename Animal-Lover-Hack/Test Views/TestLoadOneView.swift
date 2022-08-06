////
////  Echo3D-tests.swift
////  Animal-Lover-Hackathon-Project
////
////  Created by Brayton Lordianto on 8/5/22.
////
//
//import SwiftUI
//import RealityKit
//import ARKit
//
//// success downloading from a given url
//// success getting the file path on the device and displaying it
//
//struct Echo3D_tests: View {
//    var testvm = testVM()
//    var body: some View {
//        NavigationView {
//            VStack {
//                Button("Download") {
//                    testvm.downloadOne()
//                }
//                Spacer(minLength: 20)
//                NavigationLink("AR test") {
//                    testARView(testvm: testvm)
//                }
//            }
//        }
//    }
//}
//
//struct testARView: UIViewRepresentable {
//    var testvm: testVM
//    
//    func makeUIView(context: Context) -> ARView {
//        
//        let arView = ARView(frame: .zero, cameraMode: .ar, automaticallyConfigureSession: true)
//        if let modelEntity = testvm.getAsModelEntity() {
//            let anchor = AnchorEntity(plane: .horizontal)
//            anchor.addChild(modelEntity)
//            arView.installGestures([.all], for: modelEntity)
//            arView.scene.addAnchor(anchor)
//            print("DEBUG: SUCCESS LOADING MODEL ENTITY")
//        } else { print("DEBUG: failed to fetch model entity.")}
//        
//        return arView
//    }
//    
//    func updateUIView(_ uiView: ARView, context: Context) {}
//    
//}
//
//
//struct testVM {
//    var directoryPath: URL {
//        try! FileManager.default.url(for: .documentDirectory,in: .userDomainMask,appropriateFor: nil,create: false)
//    }
//    
//    func getAsModelEntity(_ name: String = "bird.usdz") -> ModelEntity? {
//        guard let entity = getUsdzEntity(name) else { print("DEBUG: failed to fetch entity. "); return nil }
//        
//        // Scaling entity to a reasonable size
//        entity.generateCollisionShapes(recursive: true)
//       
//        // Creating parent ModelEntity
//        let parentEntity = ModelEntity()
//        parentEntity.addChild(entity)
//              
//        // Playing availableAnimations on repeat
//        entity.availableAnimations.forEach { entity.playAnimation($0.repeat()) }
//       
//        // Add a collision component to the parentEntity with a rough shape and appropriate offset for the model that it contains
//        let entityBounds = entity.visualBounds(relativeTo: parentEntity)
//        parentEntity.collision = CollisionComponent(shapes: [ShapeResource.generateBox(size: entityBounds.extents).offsetBy(translation: entityBounds.center)])
//
//        return parentEntity
//    }
//    
//    func getPathIfExists(fileName: String) -> (URL, Bool) {
//        // setup the url to save in
//        let savedPath = directoryPath
//            .appendingPathComponent(fileName)
//        
//        // clear the temp first
//        FileManager.default.clearTmpDirectory()
//        
//        // check if already exists
//        print("DEBUG: searching for " + savedPath.description)
//        let fileDoesExist = FileManager.default.fileExists(atPath: savedPath.path)
//        if fileDoesExist { print("DEBUG: " + fileName + " exists"); return (savedPath, true) }
//        print("DEBUG: \(fileName) is not found/cached")
//        
//        return (savedPath, false)
//    }
//
//    func getUsdzEntity(_ name: String = "bird.usdz") -> Entity? {
//        let tuple = getPathIfExists(fileName: name)
//        
//        // if exists, create a entity with the loaded url
//        guard tuple.1 else { return nil }
//        do {
//            let entity = try Entity.load(contentsOf: tuple.0)
//            print("DEBUG: success loading \(name)")
//            return entity
//        } catch { print("DEBUG: error loading \(name)") }
//        
//        return nil
//    }
//    
//    func downloadOne(name: String = "bird.usdz", urlString: String = "https://console.echoar.xyz/query?key=fragrant-sky-0288&file=8ac12f6d-ba70-4d6a-a648-cd0d394ecbc6.usdz") {
//        
//        // check if it is a usdz
//        guard urlString.hasSuffix(".usdz"), let url = URL(string: urlString)
//            else { print("DEBUG: no usdz file"); return }
//        print("DEBUG: usdz found")
//        
//        // get the path url and only continue if it is not cached
//        let tuple = getPathIfExists(fileName: name)
//        let fileExists = tuple.1
//        guard !fileExists else { return }
//        let savedPath = tuple.0
//        
//        // download from the net
//        let downloadTask = URLSession.shared.downloadTask(with: url) {
//            urlOrNil, responseOrNil, errorOrNil in
//            // handle actual downloading
//            guard let fileURL = urlOrNil else { return }
//            do {
//                print("DEBUG: loading image at " + savedPath.description)
//                try FileManager.default.moveItem(at: fileURL, to: savedPath)
//                print("DEBUG: File exists at " + savedPath.description)
//            } catch { print ("DEBUG: File Error: \(error)") }
//        }
//        downloadTask.resume()
//    }
//}
//
//extension FileManager {
//    // clear temp so there are no conflicts with the temporary directory
//    func clearTmpDirectory() {
//        do {
//            let tmpDirectory = try contentsOfDirectory(atPath: NSTemporaryDirectory())
//            //let docDirectory = try contentsOfDirectory(atPath: NSSearchPathForDirectoriesInDomains(.documentDirectory, .userDomainMask, true)[0])
//            try tmpDirectory.forEach {[unowned self] file in
//                let path = String.init(format: "%@%@", NSTemporaryDirectory(), file)
//                try self.removeItem(atPath: path)
//            }
//            /*try docDirectory.forEach {[unowned self] file in
//                let path = String.init(format: "%@%@", NSTemporaryDirectory(), file)
//                try self.removeItem(atPath: path)
//            }*/
//            
//        } catch {
//            print(error)
//        }
//    }
//}
//
//
//struct Echo3D_tests_Previews: PreviewProvider {
//    static var previews: some View {
//        Echo3D_tests()
//    }
//}
//
///*
// func downloadOne(name: String = "bird.usdz", urlString: String = "https://console.echoar.xyz/query?key=fragrant-sky-0288&file=8ac12f6d-ba70-4d6a-a648-cd0d394ecbc6.usdz") {
//     
//     // check if it is a usdz
//     guard urlString.hasSuffix(".usdz"), let url = URL(string: urlString)
//         else { print("DEBUG: no usdz file"); return }
//     print("DEBUG: usdz found")
//     
//     // setup the url to save in
//     let savedPath = directoryPath
//         .appendingPathComponent(name)
//     
//     // clear the temp first
//     FileManager.default.clearTmpDirectory()
//     
//     // check if already exists
//     let tuple = getPathIfExists(fileName: name)
//     print("result: \(tuple.0) \(tuple.1)")
//     let fileExists = tuple.1
//     guard !fileExists else { return }
//     let savedPath2 = tuple.0
//     print("BREAK")
//     
//     print("DEBUG: searching for " + savedPath.description)
//     let fileDoesExist = FileManager.default.fileExists(atPath: savedPath.path)
//     guard !fileDoesExist else { print("DEBUG: " + name + " exists"); return }
//     print("DEBUG: \(name) is not cached")
//     print("HUHUUHUHU \(savedPath) \(fileDoesExist)")
//     
//     // download from the net
//     let downloadTask = URLSession.shared.downloadTask(with: url) {
//         urlOrNil, responseOrNil, errorOrNil in
//         // handle actual downloading
//         guard let fileURL = urlOrNil else { return }
//         do {
//             print("DEBUG: loading image at " + savedPath.description)
//             try FileManager.default.moveItem(at: fileURL, to: savedPath)
//             print("DEBUG: File exists at " + savedPath.description)
//         } catch { print ("DEBUG: File Error: \(error)") }
//     }
//     downloadTask.resume()
// }
//
// */
