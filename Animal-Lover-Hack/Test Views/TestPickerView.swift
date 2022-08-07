//
//  TestPickerView.swift
//  Animal-Lover-Hack
//
//  Created by Brayton Lordianto on 8/6/22.
//

import SwiftUI
import RealityKit
import ARKit
import FocusEntity

struct TestPickerView: View {
    var echoModel: EchoModel?
    @State var isSelected = false

    var body: some View {
        if let echoModel = echoModel {
            ZStack {
                PickerAR(entity: EchoUsdzFileManager.getAsModelEntity(echoModel.storageFileID))
                    .ignoresSafeArea()
                
                picker
            }
        }
    }
}

struct PickerAR: UIViewRepresentable {
    var entity: ModelEntity?
    func makeUIView(context: Context) -> ARView {

        let view = ARView(frame: .zero)

        //MARK: green part
        // Start AR session
        let session = view.session
        let config = ARWorldTrackingConfiguration()
        config.planeDetection = [.horizontal]
        session.run(config)

        // Add coaching overlay
        let coachingOverlay = ARCoachingOverlayView()
        coachingOverlay.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        coachingOverlay.session = session
        coachingOverlay.goal = .horizontalPlane
        view.addSubview(coachingOverlay)

        // MARK: focus part
        // Handle ARSession events via delegate
        context.coordinator.view = view
        session.delegate = context.coordinator
        
        // Handle taps
        view.addGestureRecognizer(
            UITapGestureRecognizer(
                target: context.coordinator,
                action: #selector(Coordinator.handleTap)
            )
        )

        return view
    }

    func updateUIView(_ uiView: ARView, context: Context) {}
    
    func makeCoordinator() -> Coordinator {
        print("DEBUG: COORDINATOR MADE")
        return Coordinator(entity2: self.entity!)
    }
    
    class Coordinator: NSObject, ARSessionDelegate {
        weak var view: ARView?
        var focusEntity: FocusEntity?
        var entity2: ModelEntity
        
        init(entity2: ModelEntity) {
            self.entity2 = entity2
        }

        // MARK: focus part
        func session(_ session: ARSession, didAdd anchors: [ARAnchor]) {
            guard let view = self.view else { print("DEBUG: NO SESSION"); return }
            debugPrint("DEBUG: Anchors added to the scene: ", anchors)
            // use the focus entity dependency
            self.focusEntity = FocusEntity(on: view, style: .classic(color: .yellow))
        }

        // MARK: adding the box ON TAP GESTURE
        @objc func handleTap() {
            // anchor with model model entity of object
            print("DEBUG: TAPPED")
            guard let view = view else { return }
            let anchor = AnchorEntity()
            anchor.addChild(entity2)
            view.installGestures([.all], for: entity2)
            view.scene.anchors.append(anchor)
            
        }
    }


}

extension TestPickerView {
    var img: String {
        switch echoModel?.id {
        case "28f5fe9c-f1df-405c-b543-de56956e299f":
            return "crab"
        case "b6bc1813-1a6e-428f-a2c8-cd3181150db4":
            return "bird"
        case "e92c162c-3321-4496-bdd4-e2011519f5a1":
            return "gecko"
        case "85860146-0264-46a2-8265-d03e56ff5a5d":
            return "clownfish"
        default:
            return ""
        }
    }
    
    var picker: some View {
        VStack {
            
            Image(img)
                .resizable()
                .frame(width: 80, height: 80)
                .aspectRatio(1.0, contentMode: .fit)
                .cornerRadius(12)
                .background(
                    Rectangle()
                        .fill(.thinMaterial)
                        .frame(width: 100, height: 100)
                        .cornerRadius(12).shadow(radius: 30)
                )
            Spacer()
            
//            ZStack {
//                Rectangle()
//                    .foregroundColor(.gray)
//                    .opacity(10)
//                    .blur(radius: 5)
//                    .frame(width: .infinity, height: 100)
//
//                Text(echoModel?.name ?? "No Name")
//                    .font(.subheadline)
//                    .fontWeight(.bold)
//                    .fixedSize(horizontal: false, vertical: true)
//                    .multilineTextAlignment(.center)
//                    .padding()
//                    .frame(width: 80, height: 80)
//                    .background(
//                        Rectangle()
//                            .strokeBorder(!isSelected ? .white : .blue, lineWidth: !isSelected ? 5 : 10)
//                            .cornerRadius(12).shadow(radius: 3)
//                    )
//            }
//            .onTapGesture {
//                isSelected.toggle()
//            }
        }
    }
}

extension PickerAR {

}
//
//struct TestPickerComponent: View {
//    var echoModel: EchoModel?
//    @State var isSelected = false
//    var body: some View {
//        if let echoModel = echoModel {
//            ZStack {
//                Rectangle()
//                    .foregroundColor(.white)
//                    .blur(radius: 5)
//                    .frame(width: .infinity, height: 300)
//
//                Text(echoModel.name)
//                    .fontWeight(.bold)
//                    .fixedSize(horizontal: false, vertical: true)
//                    .multilineTextAlignment(.center)
//                    .padding()
//                    .frame(width: 100, height: 100)
//                    .background(
//                        Rectangle()
//                            .strokeBorder(!isSelected ? .white : .blue, lineWidth: !isSelected ? 5 : 10)
//                            .cornerRadius(12).shadow(radius: 3)
//                    )
//            }
//            .onTapGesture {
//                isSelected.toggle()
//            }
//        }
//    }
//}

//struct TestPickerView_Previews: PreviewProvider {
//    static var previews: some View {
//        TestPickerView()
//    }
//}


