//
//  SwipeableViewDelegate.swift
//  Lux
//
//  Created by Dave Jha on 11/23/18.
//  Copyright © 2018 Dave Jha. All rights reserved.
//

import Foundation

protocol SwipeableViewDelegate: class {

    func didTap(view: SwipeableView)

    func didBeginSwipe(onView view: SwipeableView)

    func didEndSwipe(onView view: SwipeableView)

}
