//
//  Event.swift
//  Lux
//
//  Created by Dave Jha on 11/23/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import Foundation

struct Event: Codable {
    
    var eventName: String?
    var provider: String?
    var timeRelevance: String?
    var genre: String?
    var place: String?
    var friendsGoing: [String]?
    
}
